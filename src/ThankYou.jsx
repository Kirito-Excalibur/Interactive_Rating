function ThankYou({user,...props}) {
  return (
    <div className="bg-gradient-to-b rounded-lg flex flex-col items-center from-gray-800  to-black p-10">
      <img src="/illustration-thank-you.svg" alt="" />
      <div className="bg-gray-700 rounded-3xl mt-5 px-3 py-1 text-orange-500">
        <p>You selected {user} out of 5</p>
      </div>
      <h1 className="text-3xl text-white mt-5">Thank You!</h1>
      <p className="text-gray-400 text-center mt-4">
        We appreaciate you taking the time to give a <br /> rating. If you ever
        need more support, don't <br /> hesitate to get in touch!
      </p>
    </div>
  );
}

export default ThankYou;
