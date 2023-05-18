import React, { useState, useEffect } from "react";
import {
  Switch,
  BrowserRouter as Router,
  withRouter,
  Route,
} from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Band from "../Band/Band";
import "./music.css";
import Albums from "../Albums/Albums";

const Music = ({ logout, isAuth }) => {
  const [bands, setBands] = useState([]);
  const [bandFiltered, setBandFiltered] = useState([]);
  const [genres, setGenres] = useState([]);
  const [albums, setAlbums] = useState([]);
  const [optionSelected, setOptionSelected] = useState("");
  const [sorted, setSorted] = useState("asc");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchBands = async () => {
      const getBands = await fetch(
        "https://my-json-server.typicode.com/improvein/dev-challenge/bands"
      );
      const jsonData = await getBands.json();
      const data = await jsonData;
      const dataSorted = await data.sort((a, b) => {
        if (a.name > b.name) {
          return 1;
        }
        if (a.name < b.name) {
          return -1;
        }
        return 0;
      });
      return dataSorted;
    };
    const fetchGenres = async () => {
      const getGenres = await fetch(
        "https://my-json-server.typicode.com/improvein/dev-challenge/genre"
      );
      const jsonData = await getGenres.json();
      const data = await jsonData;
      return data;
    };
    const fetchAlbums = async () => {
      const getAlbums = await fetch(
        "https://my-json-server.typicode.com/improvein/dev-challenge/albums"
      );
      const jsonData = await getAlbums.json();
      const data = await jsonData;
      return data;
    };
    const settingBands = async () => {
      const dataBands = await fetchBands();
      const dataGenres = await fetchGenres();
      const dataAlbums = await fetchAlbums();
      setBands(dataBands);
      setGenres(dataGenres);
      setAlbums(dataAlbums);
    };

    settingBands();
  }, [optionSelected]);

  const handleOptions = (e) => {
    setOptionSelected(e.target.value);
  };

  const filterBands = async (e) => {
    await handleOptions(e);
    const filter = bands.filter((band) => band.genreCode === e.target.value);
    setBandFiltered(filter);
  };

  const sortGroup = (e) => {
    console.log(e.target.value);
    if (e.target.value === "desc") {
      setSorted("desc");
      bands.sort((a, b) => {
        if (a.name > b.name) {
          return -1;
        }
        if (a.name < b.name) {
          return 1;
        }
        return 0;
      });
      if (bandFiltered.length > 0) {
        bandFiltered.sort((a, b) => {
          if (a.name > b.name) {
            return -1;
          }
          if (a.name < b.name) {
            return 1;
          }
          return 0;
        });
      }
    }

    if (e.target.value === "asc") {
      bands.sort((a, b) => {
        setSorted("asc");
        if (a.name > b.name) {
          return 1;
        }
        if (a.name < b.name) {
          return -1;
        }
        return 0;
      });
      if (bandFiltered.length > 0) {
        bandFiltered.sort((a, b) => {
          if (a.name > b.name) {
            return 1;
          }
          if (a.name < b.name) {
            return -1;
          }
          return 0;
        });
      }
    }
  };

  if (loading)
    return (
      <div className="mt-5">
        <h1>Loading...</h1>
      </div>
    );

  return (
    <>
      <div className="container-fluid">
        <Navbar isAuth={isAuth} logout={logout} />
      </div>

      <div className="row">
        <div className="col-4 mt-3">
          <select
            className="form-select"
            aria-label="Genres Select"
            value={optionSelected}
            onChange={(e) => filterBands(e)}
          >
            <option value="" defaultChecked>
              Genres
            </option>
            {genres.map((genre, index) => (
              <option key={index} value={genre.code}>
                {genre.name}
              </option>
            ))}
          </select>
        </div>
        <div className="col-8 text-white mt-3" onChange={(e) => sortGroup(e)}>
          <div className="form-check form-check-inline">
            <label className="form-check-label">Sort</label>
          </div>
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="radio"
              name="inlineRadioOptions"
              id="inlineRadio1"
              value="asc"
              defaultChecked
            />
            <label className="form-check-label" htmlFor="inlineRadio1">
              A-Z
            </label>
          </div>
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="radio"
              name="inlineRadioOptions"
              id="inlineRadio2"
              value="desc"
            />
            <label className="form-check-label" htmlFor="inlineRadio2">
              Z-A
            </label>
          </div>
        </div>
      </div>
      <Router>
        <Switch>
          <Route exact path="/music/:idBand">
            <Albums albums={albums} />
          </Route>

          <div className="container mt-3 music-content">
            {optionSelected === ""
              ? bands.map((b) => (
                  <div className="col-4">
                    <Band
                      key={b.id}
                      idBand={b.id}
                      bandName={b.name}
                      genre={b.genreCode}
                      year={b.year}
                      country={b.country}
                      members={b.members}
                      albums={albums}
                    />
                  </div>
                ))
              : bandFiltered.map((f) => (
                  <div className="col-4">
                    <Band
                      key={f.id}
                      idBand={f.id}
                      bandName={f.name}
                      genre={f.genreCode}
                      year={f.year}
                      country={f.country}
                      members={f.members}
                      albums={albums}
                    />
                  </div>
                ))}
          </div>
        </Switch>
      </Router>
    </>
  );
};

export default withRouter(Music);
