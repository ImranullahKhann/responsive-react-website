export default function TripCard ({ cardImg }) {
    return (
        <div className="card w-80 bg-red-800 flex flex-col items-center py-4 rounded-xl cursor-pointer">
            <div className='w-11/12 h-36 mb-5'>
                <img src={cardImg} className="w-full h-full object-cover rounded-lg"/>
            </div>
            <div className="card-info px-5">
                <h4 className="text-center">Trip in Country</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, voluptatem ducimus. Repudiandae id, eum animi assumenda recusandae perferendis, alias delectus impedit non dolorum porro repellendus dolorem. </p>
            </div>
        </div>
    )
}