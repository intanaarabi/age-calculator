const inputFieldClassName = "mt-1 w-24 block px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-primary-purple focus:border-primary-purple sm:text-sm"
const labelClassName = "block text-xs font-medium text-gray-700 tracking-widest";
function AgeCalculator() {
    return (
        <div className='bg-neutral-white p-8 rounded-t-xl rounded-bl-xl rounded-br-[150px]'> 
        <div className="flex flex-col">
            <div className="flex flex-row space-x-4">
                <div className="flex flex-col">
                    <label htmlFor="day" className={labelClassName}>Day</label>
                    <input
                    type="number"
                    name="day"
                    id="day"
                    className={inputFieldClassName}
                    placeholder="DD"
                    />
                </div>
                <div className="flex flex-col">

                    <label htmlFor="month"  className={labelClassName}>Month</label>
                    <input
                    type="number"
                    name="month"
                    id="month"
                    className={inputFieldClassName}
                    placeholder="MM"
                    />
                </div>
                <div className="flex flex-col">
                    <label htmlFor="year"  className={labelClassName}>Year</label>
                    <input
                    type="number"
                    name="year"
                    id="year"
                    className={inputFieldClassName}
                    placeholder="YYYY"
                    />
                </div>
            </div>
            <div className="flex flex-row items-center space-x-4">
                <hr className="w-[350px]"></hr>
                <button className="rounded-[100%] bg-primary-purple p-4 hover:bg-neutral-off-black transition:hover duration-300">
                    <img className="w-6" src="./icon-arrow.svg" alt="Icon Arrow Submit"></img>
                </button>
            </div>
            <div className="flex flex-col space-y-2 italic font-extrabold text-6xl">
                <div><span className="text-primary-purple">--</span>years</div>
                <div><span className="text-primary-purple">--</span>months</div>
                <div><span className="text-primary-purple">--</span>days</div>
            </div>
        </div>
        </div>
    )
}

export default AgeCalculator
