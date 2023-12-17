import Modal from "./Modal";
import Schema from "./Schema";
import { useState } from "react";

const Schemas = () => {
  const [showPopupData, setShowPopupData] = useState(null);

  return (
    <div className='lg:w-1/5 md:w-1/5 w-full bg-gray-950 px-6 py-4 border-r border-gray-700'>
      {
        showPopupData && <Modal showPopupData={showPopupData} setShowPopupData={setShowPopupData} />
      }
      <h3 className="text-xl font-bold pb-3">Schemas</h3>
      <div className="flex flex-col gap-4">
        <Schema setShowPopupData={setShowPopupData} table_name='customers' />
        <Schema setShowPopupData={setShowPopupData} table_name='students' />
        <Schema setShowPopupData={setShowPopupData} table_name='sales' />
      </div>
    </div>
  )
}

export default Schemas;