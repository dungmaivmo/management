import { useEffect } from "react";
import { FcAbout } from "react-icons/fc";
import { useDispatch, useSelector } from "react-redux";
import { setLinkRedirect } from "../../../app/statusReducers";
import { deleteTechStack } from "../tech-stack.services";
export const FormDetailTechStack = ({ detailsTeckStack, setUpdate }) => {
  const dispatch = useDispatch();
  const { link: linkTechStack } = useSelector(state => state.projectType);
  useEffect(() => {
    dispatch(setLinkRedirect(linkTechStack));
  }, [linkTechStack]);
  const sumbitDeleteTechStacks = () => {
    const { _id } = detailsTeckStack;
    dispatch(deleteTechStack(_id));
  };
  return (
    <div className="w-10/12 sm:w-11/12 sm:ml-4 rounded-lg shadow-lg bg-white mt-10 ml-5">
      <div className="flex justify-between border-b border-gray-100 px-5 py-4">
        <div className="flex items-center">
          <FcAbout className="text-2xl mr-2" />
          <span className="font-bold text-gray-700 text-lg">Tech Stack Information</span>
        </div>
      </div>
      <div>
        <div className="px-10 py-5 text-gray-600">
          Name: <b>{detailsTeckStack?.name}</b>
        </div>
        <div className="px-10 py-5 text-gray-600">
          Description : <b>{detailsTeckStack?.description}</b>
        </div>
        <div className="px-10 py-5 text-gray-600">
          Status :{" "}
          {detailsTeckStack?.status === "active" ? (
            <span className="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
              <span
                aria-hidden
                className="absolute inset-0 bg-green-200 opacity-50 rounded-full"
              ></span>
              <span className="relative">Active</span>
            </span>
          ) : (
            <span className="relative inline-block px-3 py-1 font-semibold text-red-900 leading-tight">
              <span
                aria-hidden
                className="absolute inset-0 bg-red-200 opacity-50 rounded-full"
              ></span>
              <span className="relative">Inactive</span>
            </span>
          )}
        </div>
        <div className="px-5 py-4 flex justify-end">
          <button
            onClick={sumbitDeleteTechStacks}
            className="border font-medium border-red-500 bg-red-500 text-white rounded-md px-3 py-2 m-2 transition duration-500 ease select-none hover:bg-red-700 focus:outline-none focus:shadow-outline"
          >
            DELETE
          </button>
          <button
            onClick={() => setUpdate(true)}
            className="border font-medium border-green-700 bg-green-700 text-white rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-green-600 focus:outline-none focus:shadow-outline"
          >
            EDIT
          </button>
        </div>
      </div>
    </div>
  );
};
