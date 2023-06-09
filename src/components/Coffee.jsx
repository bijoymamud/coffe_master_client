import { Link } from "react-router-dom";
import Swal from "sweetalert2";


const Coffee = ({ coffee, setCoffees, coffees }) => {

    const { _id, name, quantity, supplier, taste, category, details, photo } = coffee;


    //for deleting single coffee
    const handleDelete = _id => {
        //id dhore delete korte hobe tai event na niye _id niwa hyse
        console.log(_id);
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {

                //aikhne kun id tay click kore delete korbo oita niye asar jonno fetch use korbo
                //kon method ke click korbo oita ble dte hbe

                fetch(`http://localhost:5000/coffee/${_id}`, {
                    method: "DELETE",
                    headers: {
                        "content-type": "application/json"
                    },
                    body: JSON.stringify()
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your item has been deleted.',
                                'success'
                            )

                            //notun state a rakhbo jno delte korar por shte shte server theke chole jay
                            const remaining = coffees.filter(cof => cof._id !== _id);
                            setCoffees(remaining);


                        }
                    })
            }
        })

    }
    return (
        <div className=" mb-10">
            <div className="card card-side bg-base-100 shadow-xl">
                <figure><img src={photo} alt="Movie" /></figure>
                <div className=" flex justify-between w-full pr-5">
                    <div>
                        <h2 className="card-title">{name}</h2>
                        <p>{quantity}</p>
                        <p>{supplier}</p>
                        <p>{category}</p>
                    </div>
                    <div className="card-actions justify-end">
                        <div className="btn-group btn-group-vertical space-y-5 p-3">
                            <button className="btn btn-active">View</button>
                            <Link to={`/updateCoffee/${_id}`}>
                                <button className="btn">Edit</button>
                            </Link>
                            <button
                                onClick={() => handleDelete(_id)}
                                className="btn">X</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Coffee;