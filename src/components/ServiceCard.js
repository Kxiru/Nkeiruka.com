export default function ServiceCard(props) {
  return (
    <div className="relative text-center shadow-lg p-5 rounded-xl my-10 flex-1 bg-white pb-16">
      <div>
        <img
          className="mx-auto w-50 h-40 object-cover rounded-md"
          src={props.cardImage}
          alt=""
        />
      </div>
      <div className="h-fit">
        <h3 className="text-lg font-medium pt-8 pb-2 text-teal-600">
          {props.cardTitle}
        </h3>
        <p className="py-2">{props.cardDescription}</p>
      </div>
      <div className="absolute left-1/2 transform -translate-x-1/2 bottom-5 ">
        <a
          href={props.cardLink}
          className="bg-gradient-to-r bg-teal-500 text-white px-4 py-2 rounded"
        >
          Find out more
        </a>
      </div>
    </div>
  );
}
