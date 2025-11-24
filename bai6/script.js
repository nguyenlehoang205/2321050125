    let listFilm = [
        {
            id: 1,
            name:"Mưa đỏ",
            type:"Phim bộ",
            banner:"./anh/banner/MUADO_STILL_014.webp",    
            trailer:"https://www.youtube.com/watch?v=UEqjUBGjvwI",
            nation:"Việt Nam"
        },
        {
            id: 2,
            name: "Trạng Quỳnh",
            type: "Phim bộ",
            banner:"./anh/banner/9b3ioor3_1_horizontal-thumbnaile38a3b900f7a926072f1ac76d9aeb420.jpg",
            trailer:"https://www.youtube.com/watch?v=N8yrOanbEcY",
            nation:"Việt Nam"
        },
        {
            id: 3,
            name: "Mặt trời mùa đông",
            type: "Phim bộ",
            banner:"./anh/banner/phim.jpeg",
            trailer:"https://www.youtube.com/watch?v=N8yrOanbEcY",
            nation:"Việt Nam"

        },{
            id: 4,
            name: "Kẻ kiến tạo",
            type: "Phim bộ",
            banner:"./anh/banner/the-creator.jpg",
            trailer:"https://www.youtube.com/watch?v=N8yrOanbEcY",
            nation:"Hoa Kỳ"

        },
        {
            id: 5,
            name: "Chiến binh cuối cùng",
            type: "Phim bộ",
            banner:"./anh/banner/the-last-warrior-root-of-evil.jpg",
            trailer:"https://www.youtube.com/watch?v=N8yrOanbEcY",
            nation:"Hoa Kỳ"

        },

    ]

    let selectedFilm = listFilm[0]; // lưu giá trị ban đầu

    let bannerElement = document.getElementsByClassName("banner")[0]
    function viewTrailer(filmId){
        // let selectedFilm = listFilm.find(film => film.id === filmId);
        let trailerElement = document.getElementsByClassName("trailer")[0];
        bannerElement.style.display = "none";
        trailerElement.style.display = "block";
        // trailerElement.src=listFilm.trailer;
        for(let i=0; i<listFilm.length; i++){
            if(filmId == listFilm[i].id){
                //  bannerElement.src=selectedFilm.banner;
                selectedFilm=listFilm[i];
            }
        }
        trailerElement.src=selectedFilm.trailer;
    }
    function chooseFilm(filmId){
        // let selectedFilm = listFilm.find(film => film.id === filmId);
        for(let i=0; i<listFilm.length; i++){
            if(filmId == listFilm[i].id){
                selectedFilm=listFilm[i];
                //bannerElement.src=listFilm[i].banner;        
            }
        }
         bannerElement.src=selectedFilm.banner;
        // let selectedFilm = listFilm.find(film => film.id === filmId);
        // // bannerElement.style.backgroundImage = "url" + "(" + selectedFilm.banner + ")";
        // bannerElement.src=listFilm.banner;
    }
    function chooseNation(filmId){
        for(let i=0; i<listFilm.length; i++){
            if(filmId == listFilm[i].id){
                selectedFilm=listFilm[i];
        }
    }
    bannerElement.src=selectedFilm.banner;
}


    


