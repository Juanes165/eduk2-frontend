export default function PreviewCard({ coursePreview }) {
    let courseImage = "";

    if (coursePreview.urlPhoto === "") {
      courseImage = "https://placehold.co/400x200?font=Montserrat&text=" + coursePreview.name;
    } else {
      courseImage = coursePreview.urlPhoto;
    }
  
    return (
        <div className="bg-gray-300 w-full h-full p-5 rounded-md">     
            <div className="flex flex-col w-full md:max-w-[400px] border border-black border-opacity-15 2xl:h-[260px] rounded-lg bg-main-light">
                <img 
                    src={courseImage} 
                    alt={coursePreview.name} 
                    className="rounded-t-lg object-cover w-full h-[200px]"      
                />
                <div className="rounded-b-lg p-4">
                    <h3 className="text-2xl uppercase text-black font-bold">{coursePreview.name}</h3>
                </div>
            </div>
        </div>   
    );

}