import React from 'react';
import Select from 'react-select';
import { VscSearch } from 'react-icons/vsc';
import AsyncSelect from 'react-select/async';
import useStore from '../../stores/useStore';
const SearchInputs = () => {
  const { regions } = useStore((store) => store.state);

  return (
    <div className="container-fluid">
      <div className="row d-flex ps-0 pe-0 justify-content-between">
        <div className="col-12 col-sm-3 ps-0 pe-0">
          <div className="input-group mb-3  ">
            <span className="input-group-text" id="basic-addon1">
              <VscSearch />
            </span>
            <input
              type="text"
              className="form-control"
              placeholder="Search for a Country..."
              aria-label="Search for a Country"
              aria-describedby="search-for-a-country"
            />
          </div>
        </div>
        <Select
          isMulti
          name="regions"
          options={regions}
          className="basic-multi-select col-12 col-sm-2 ps-0 pe-0"
          classNamePrefix="select"
        />
      </div>
    </div>
  );
};

export default SearchInputs;
