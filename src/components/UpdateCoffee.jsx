
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';

const UpdateCoffee = () => {

    const coffee = useLoaderData();
    const { _id, name, quantity, supplier, taste, category, details, photo } = coffee;


    const handleUpdatedCoffee = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const quantity = form.quantity.value;
        const supplier = form.supplier.value;
        const taste = form.taste.value;
        const category = form.category.value;
        const details = form.details.value;
        const photo = form.photo.value;

        const updatedCoffe = { name, quantity, supplier, taste, category, details, photo };
        console.log(updatedCoffe);

        //server theke req korar por akhn theke pathabo
        fetch(`http://localhost:5000/coffee/${_id}`, {
            //post e hit korar jonno
            method: "PUT",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(updatedCoffe)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Successfully Updated',
                        icon: 'success',
                        confirmButtonText: 'Lets go'
                    })
                }
            })

    }
    return (
        <div className='bg-[#F4F3F0] p-24'>
            <h2 className='text-3xl font-extrabold'>Update a Coffee</h2>
            <form onSubmit={handleUpdatedCoffee}>
                {/*Name and quantity*/}
                <div className='md:flex gap-10 mb-8'>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Coffee Name</span>
                        </label>
                        <label className="input-group">

                            <input type="text" placeholder="Coffee Name"
                                name='name'
                                defaultValue={name}
                                className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Available Quantity</span>
                        </label>
                        <label className="input-group">

                            <input type="number"
                                name='quantity'
                                defaultValue={quantity}
                                placeholder="Available Quantity" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                {/*supply test*/}
                <div className='md:flex gap-10 mb-8'>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Supplier Name</span>
                        </label>
                        <label className="input-group">

                            <input type="text" placeholder="Supplier Name"
                                name='supplier'
                                defaultValue={supplier}
                                className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Taste</span>
                        </label>
                        <label className="input-group">

                            <input type="text"
                                name='taste'
                                defaultValue={taste}
                                placeholder="Coffee Taste" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                {/*Category and details*/}
                <div className='md:flex gap-10 mb-8'>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Category</span>
                        </label>
                        <label className="input-group">

                            <input type="text" placeholder="Category"
                                name='category'
                                defaultValue={category}
                                className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Details</span>
                        </label>
                        <label className="input-group">

                            <input type="text"
                                name='details'
                                defaultValue={details}
                                placeholder="Details" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                {/*Form photo url*/}
                <div className=' gap-10 mb-8'>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Photo URL</span>
                        </label>
                        <label className="input-group">

                            <input type="text" placeholder="Photo URL"
                                name='photo'
                                defaultValue={photo}
                                className="input input-bordered w-full" />
                        </label>
                    </div>

                </div>

                <input type="submit" value="Update Coffee" className="btn btn-block" />
            </form>
        </div>
    );
};

export default UpdateCoffee;