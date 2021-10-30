import { useEffect } from "react";
import { useState } from "react";
import useAuth from "./useAuth";

const useCart = () => {
    const { user } = useAuth();
    const { uid } = user;
    const [selectedCourse, setSelectedCourse] = useState([])

    useEffect(() => {
        fetch(`http://localhost:5000/package/${uid}`)
            .then((res) => res.json())
            .then((data) => {
                if (data.length) {
                    setSelectedCourse(data);
                }
            });
    }, [uid]);

    function addToCart(pack) {
        const isHave = selectedCourse.find(
            (selected) => selected._id === pack._id
        );
        delete pack._id;
        pack.uid = uid;
        pack.status = "pending";

        if (isHave) {
            alert("pack has been selected!");
        } else {
            fetch("http://localhost:5000/pack/add", {
                method: "post",
                headers: { "content-type": "application/json" },
                body: JSON.stringify(pack),
            })
                .then((res) => res.json())
                .then((data) => {
                    if (data.insertedId) {
                        const newSelection = [...selectedCourse, pack];
                        setSelectedCourse(newSelection);
                    }
                });
        }
    }

    function remove(id) {
        fetch(`http://localhost:5000/delete/${id}`, {
            method: "delete",
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.deletedCount === 1) {
                    const selectAfterRemove = selectedCourse.filter(
                        (pack) => pack._id !== id
                    );
                    setSelectedCourse(selectAfterRemove);
                } else {
                    alert("something went wrong!!");
                }
            });
    }

    return { setSelectedCourse, remove, addToCart, selectedCourse };
};

export default useCart;