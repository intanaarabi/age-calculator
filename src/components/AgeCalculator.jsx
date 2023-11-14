import { useForm } from 'react-hook-form';


function AgeCalculator() {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
      } = useForm()
    
    const onSubmit = (data) => {

    }

    //Styling
    function getInputClassName(fieldName) {
        let baseClasses = "mt-1 w-24 block px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-primary-purple focus:border-primary-purple sm:text-sm"
        let errorClass = errors[fieldName] ? "border-primary-light-red" : "";
        return `${baseClasses} ${errorClass}`;
    }

    //Styling
    function getLabelClassName(fieldName) {
        let baseClasses = "uppercase block text-[8px] font-medium text-gray-700 tracking-widest";
        let errorClass = errors[fieldName] ? "text-primary-light-red" : "";
        return `${baseClasses} ${errorClass}`;
    }

    const errorClassName = "text-primary-light-red text-[8px] italic my-2"

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className='bg-neutral-white p-8 rounded-t-xl rounded-bl-xl rounded-br-[150px]'> 
            <div className="flex flex-col">
            <div className="flex flex-row space-x-4">
                    <div className="flex flex-col">
                        <label
                        htmlFor="day"
                        className={`${getLabelClassName("day")}`}
                        >
                            Day
                        </label>
                        <input
                        type="number"
                        name="day"
                        id="day"
                        className={`${getInputClassName("day")}`} 
                        placeholder="DD"
                        {...register('day',{
                            required: "This field is required",
                          })}
                        />
                        {errors.day && <span className={errorClassName}>{errors.day.message}</span>}
                    </div>
                    <div className="flex flex-col">
                        <label
                        htmlFor="month"
                        className={`${getLabelClassName("month")}`}
                        >
                            Month
                        </label>
                        <input
                        type="number"
                        name="month"
                        id="month"
                        className={`${getInputClassName("month")}`} 
                        placeholder="MM"
                        {...register('month',{
                            required: "This field is required",
                          })}                        />
                        {errors.month && <span className={errorClassName}>{errors.month.message}</span>}
                    </div>
                    <div className="flex flex-col">
                        <label
                        htmlFor="year"
                        className={`${getLabelClassName("year")}`}
                        >
                            Year
                        </label>
                        <input
                        type="number"
                        name="year"
                        id="year"
                        className={`${getInputClassName("year")}`} 
                        placeholder="YYYY"
                        {...register('year',{
                            required: "This field is required",
                          })}                        />
                        {errors.year && <span className={errorClassName}>{errors.year.message}</span>}
                    </div>
            </div>
            <div className="flex flex-row items-center space-x-4">
                <hr className="w-[350px]"></hr>
                <button type="submit" className="rounded-[100%] bg-primary-purple p-4 hover:bg-neutral-off-black transition:hover duration-300">
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
        </form>
    )
}

export default AgeCalculator
