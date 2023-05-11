

const Coffee = ({ coffee }) => {

    const { _id, name, quantity, supplier, taste, category, details, photo } = coffee;


    //for deleting single coffee
    const handleDelete = _id => {
        //id dhore delete korte hobe tai event na niye _id niwa hyse
        console.log(_id);

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
                            <button className="btn">Edit</button>
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