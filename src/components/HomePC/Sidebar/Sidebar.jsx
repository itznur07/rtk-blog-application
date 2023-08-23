import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  sortChanged,
  statusSelected,
} from "../../../redux/features/filters/filtersSlice";

const Sidebar = () => {
  const dispatch = useDispatch();
  const { status, sort } = useSelector((state) => state.filters);

  return (
    <div>
      <aside>
        <div className='sidebar-items'>
          <div className='sidebar-content'>
            <h4>Sort</h4>
            <select
              name='sort'
              id='lws-sort'
              onChange={(e) => dispatch(sortChanged(e.target.value))}
              defaultValue={sort}
              className='w-full max-w-[150px] border-2 rounded-md text-gray-500'
            >
              <option value=''>Default</option>
              <option value='newest'>Newest</option>
              <option value='most_liked'>Most Liked</option>
            </select>
          </div>
          <div className='sidebar-content'>
            <h4>Filter</h4>
            <div className='radio-group'>
              {/* <!-- handle filter on button click --> */}
              <div>
                <input
                  type='radio'
                  name='filter'
                  id='lws-all'
                  checked={status === "all"}
                  onChange={(e) => dispatch(statusSelected("all"))}
                  className='radio'
                />
                <label for='lws-all'>All</label>
              </div>
              <div>
                <input
                  type='radio'
                  name='filter'
                  checked={status === "saved"}
                  onChange={(e) => dispatch(statusSelected("saved"))}
                  id='lws-saved'
                  className='radio'
                />
                <label for='lws-saved'>Saved</label>
              </div>
            </div>
          </div>
        </div>
      </aside>
    </div>
  );
};

export default Sidebar;
