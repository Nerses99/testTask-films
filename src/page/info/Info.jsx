import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useParams } from "react-router-dom";
import { selectFilms } from "store/selector";
import { tvBlandInfoThunk } from "store/slice/thunk";
import Show from "./components/Show";
import Starring from "./components/Starring";

import "./info.scss";

const Info = () => {
  const { filmItems } = useSelector(selectFilms);
  const dispatch = useDispatch();
  const { id } = useParams();
  const { state } = useLocation();
  const changeName = state?.starringName?.split(",");
  useEffect(() => {
    dispatch(tvBlandInfoThunk(id));
  }, [dispatch, id]);

  return (
    <div className="info">
      <div className="info__container">
        <Show filmItems={filmItems} strem={filmItems.network?.name} />
        <Starring starringName={changeName} />
      </div>
    </div>
  );
};

export default Info;
