import Landing from "./containers/Landing";
import Contact from "./containers/Contact";
import Info from "./containers/Info";
import Home from "./containers/Home";


export const ROUTES = [
    {
        path: "/",
        loader: async () => {
            const fetchInit = {
                method: "GET",
                headers: {
                    'Content-Type': 'application/json'
                },
                mode: 'no-cors',
                cache: 'no-cache',
                referrerPolicy: 'no-referrer'
            }

            // const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?units=imperial&lat=43.1178&lon=-88.9573&appid=0d3c85d44caec6a146dac4eb25c14e73`, fetchInit);
            // const json = res.json()

            // console.log("sending a get request for content...")
            // const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?units=imperial&lat=43.1178&lon=-88.9573&appid=0d3c85d44caec6a146dac4eb25c14e73"`, fetchInit).then((data) => {
            //     return data;
            // }).catch((err) => {
            //     console.log("Error fetching landscapes.", err);
            // })
            // const res2 = await fetch(`http://localhost:8082/api/v1/content/newville`, fetchInit).then((data) => {
            //     return data;
            // }).catch((err) => {
            //     console.log("Error fetching newville.", err);
            // })

            // json = await res.json()
            // json2 = await res2.json()
            // return {landscapes: json, newville: json2};
            return {
                landscapes: ["korthViewLowerKorth.jpg", "korthViewRockLake.jpg", "lakeBeaverDam.jpg"]
            }
        },
        element: <Home />
    },
    // {
    //     path: "contact",
    //     element: <Contact />
    // },
    {
        path: 'info',
        loader: async () => {
                    const fetchInit = {
                        method: "GET",
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        mode: 'cors',
                        cache: 'no-cache',
                        referrerPolicy: 'no-referrer'
                    }
                    // console.log("sending a get request for products...")
                    // const res = await fetch(`http://localhost:8082/api/v1/content/jazzmin`, fetchInit);
                    // const json = await res.json();
                    // console.log("[routes.js|loader] jazzmin filenames res.json(): ", json);
                    // return json;
            return ["jazz1.HEIC.jpg", "jazz2.HEIC.jpg", "jazz3.HEIC.jpg", "jazz4.HEIC.jpg"];
        },
        element: <Info />
    }

]