import styled from 'styled-components';
export const MapsStl = styled.section`
    width: 100%;
    .maps__select {
        width: 120px;
        position: relative;
        left: calc(100% - 130px);
        top: 10px;
        margin: 0 auto;
        z-index: 401;
    }
    .leaflet-container {
        height: 33.34vw;
    }
    .leaflet-control-attribution {
        display: none;
    }
    .custom-marker-cluster {
        /* width: 33px;
        height: 33px; */
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 50%;
        outline: 4px solid #7859CF;
        background-color: #ffffff;
        /* border: 1px solid red; */
    }
    .cluster-icon {
        width: 28px;
        height: 28px;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 50%;
        background-color: #7859CF;
        color: #ffffff;
        /* border: 1px solid green; */
    }
    @media (max-width: 1400px) {
        .leaflet-container {
            height: 62.5vw;
        }
    }
    @media (max-width: 600px) {
        .leaflet-container {
            height: 131.25vw;
        }
    }
`;