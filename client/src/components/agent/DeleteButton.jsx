import { useState } from "react";
import exit from "../../assets/icons/RoomAndProperty/exit.png"

function deleteButton() {
  const [modal, setModal] = useState(false);

  const handleClick = () => {
    setModal(!modal);
  };
  return (
    <div className="Modal">
      <div className="overlay"></div>
      <div className="border border-1">
        <div className="flex flex-col px-[8px] py-[24px] border border-1">
          <h5>Delete Room</h5>
        </div>
        <div>
          <div className="gap-[24px] p-[24px]">
            <p>Are you sure you want to delete this room?</p>
          </div>
          <div className="flex justify-end gap-[16px]">
            <button className="button-secondary w-[220px] h-[48px] flex items-center">
              Yes,I want to delete{" "}
            </button>
            <button className="button-primary ">No,I don't</button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default deleteButton;
