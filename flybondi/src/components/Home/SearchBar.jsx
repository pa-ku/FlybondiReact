import React from 'react'

export default function SearchBar() {
  return (
    <>
    <main>

    <div id="searchBar-ctn">

<div id="seachBar-top-ctn">
    <button id="vuelos">Vuelos</button>
    <button id="ultraPases">Ultra Pases</button>
</div>

<div id="searchBar">
    <div className="searchBar-select-main-ctn">

        <div className="searchBar-select-ctn">
            <div className="searchBar-logo-select">
                <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <g>
                        <path fill="none" d="M0 0h24v24H0z" />
                        <path
                            d="M10.478 11.632L5.968 4.56l1.931-.518 6.951 6.42 5.262-1.41a1.5 1.5 0 0 1 .776 2.898L5.916 15.96l-.776-2.898.241-.065 2.467 2.445-2.626.704a1 1 0 0 1-1.133-.48L1.466 10.94l1.449-.388 2.466 2.445 5.097-1.366zM4 19h16v2H4v-2z" />
                    </g>
                </svg>

            </div>

            <label htmlFor="">Origen</label>
            <select name="" id="" className="searchBar-select">
                <option value="">Buenos Aires</option>
                <option value="">Neuquen</option>
                <option value="">Usuahia</option>
                <option value="">Tucuman</option>
                <option value="">Bariloche</option>
                <option value="">Cordoba</option>
                <option value="">Salta</option>
            </select>
        </div>

        <div className="searchBar-select-ctn">

            <div className="searchBar-logo-select">
                <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <g>
                        <path fill="none" d="M0 0h24v24H0z" />
                        <path
                            d="M10.254 10.47l-.37-8.382 1.933.518 2.81 9.035 5.261 1.41a1.5 1.5 0 1 1-.776 2.898L4.14 11.937l.776-2.898.242.065.914 3.35-2.627-.703a1 1 0 0 1-.74-.983l.09-5.403 1.449.388.914 3.351 5.096 1.366zM4 19h16v2H4v-2z" />
                    </g>
                </svg>
            </div>

      <label htmlFor="">Destino</label>
            <select name="" id="" className="searchBar-select">
                <option value="">Buenos Aires</option>
                <option value="">Neuquen</option>
                <option value="">Usuahia</option>
                <option value="">Tucuman</option>
                <option value="">Bariloche</option>
                <option value="">Cordoba</option>
                <option value="">Salta</option>
            </select>

        </div>



        <div className="searchBar-select-ctn">



            <div className="searchBar-logo-select" id="svg-logo-pasajero">
                <svg width="20px" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                    <title>ionicons-v5-j</title>
                    <path
                        d="M288,256c52.79,0,99.43-49.71,104-110.82,2.27-30.7-7.36-59.33-27.12-80.6C345.33,43.57,318,32,288,32c-30.24,0-57.59,11.5-77,32.38-19.63,21.11-29.2,49.8-27,80.78C188.49,206.28,235.12,256,288,256Z" />
                    <path
                        d="M495.38,439.76c-8.44-46.82-34.79-86.15-76.19-113.75C382.42,301.5,335.83,288,288,288s-94.42,13.5-131.19,38c-41.4,27.6-67.75,66.93-76.19,113.75-1.93,10.73.69,21.34,7.19,29.11A30.94,30.94,0,0,0,112,480H464a30.94,30.94,0,0,0,24.21-11.13C494.69,461.1,497.31,450.49,495.38,439.76Z" />
                    <path
                        d="M104,288V248h40a16,16,0,0,0,0-32H104V176a16,16,0,0,0-32,0v40H32a16,16,0,0,0,0,32H72v40a16,16,0,0,0,32,0Z" />
                </svg>
            </div>


            <label htmlFor="">cantidad de pasajeros</label>
            <select name="" id="" className="searchBar-select">
                <option value="">1 Adulto</option>
                <option value="">2 Niños</option>
                <option value="">3 Bebes</option>
            </select>
        </div>
    </div>

    <div className="searchBar-ctn-btn">
        <a href="https://flybondi.com/ar/search/destination?adults=1&children=0&currency=ARS&fromCityCode=BUE&infants=0" className="searchBar-btn">Buscar vuelos</a>
    </div>

</div>
</div>

</main> 
    
    </>
  )
}
