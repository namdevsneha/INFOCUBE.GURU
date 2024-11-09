export default function Lawyer(){
    return (
        <div className="mx-[16px] md:mx-[32px] lg:mx-[0px] lg:mr-[32px] mt-[120px] lg:mt-[200px] ">
            <h2 className="mt-[8px] font-poppins lg:mt-[8px] text-black  mb-[8px] md:mb-[12px] font-semibold xl:max-w-[300px]: text-[24px] md:text-[44px]">Describe What Your blog is About</h2>
            <span className='text-[12px] font-poppins md:text-[20px]' 
        >Description of the given blog... </span>
        <section className="grid lg:grid-cols-5 ">
            <div className="h-[200px] hidden lg:block col-span-1 bg-blue-300 ">
            </div>
            <div className="font-roboto text-[18px] col-span-3 "> 
                A lawyer is a person who is licensed to practice law. A lawyer has two main obligations firstly to uphold the law and secondly to protect their client’s rights.
                A lawyer performs various duties such as prosecuting in court, defending in court, contracts, real estate transactions, and research.   </div>
            <div className="h-[200px] hidden lg:block col-span-1 bg-blue-300"> </div>
        </section>
        </div>
    )
}