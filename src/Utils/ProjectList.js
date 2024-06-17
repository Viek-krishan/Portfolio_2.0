import empEd1 from "../assets/img/empED (2).png";
import empEd2 from "../assets/img/empED (3).png";
import empEd3 from "../assets/img/empED (4).png";
import empEd4 from "../assets/img/empED (1).png";
import pixelPlex1 from "../assets/img/PixelPlex (1).png";
import pixelPlex2 from "../assets/img/PixelPlex (2).png";
import pixelPlex3 from "../assets/img/PixelPlex (3).png";
import pixelPlex4 from "../assets/img/PixelPlex (4).png";
import shoeMall1 from "../assets/img/shoeMall (1).png";
import shoeMall2 from "../assets/img/shoeMall (2).png";
import shoeMall3 from "../assets/img/shoeMall (3).png";
import shoeMall4 from "../assets/img/shoeMall (4).png";
import Swiggi1 from "../assets/img/Swiggi (3).png";
import Swiggi2 from "../assets/img/Swiggi (2).png";
import Swiggi3 from "../assets/img/Swiggi (1).png";
import blog from "../assets/img/Blog.png";

export const ProjectList = [
  {
    id: 1,
    name: "EmpowerED",
    bio: "An online tution platform with easy access of teaching tools",
    date: "Running",
    img: [
      [
        empEd1,
        "Home page",
        "Here is my home page of my online tutoring platform which help the mentors for easy explaination to the students which involves tools like White Board, Live video calling and Live group chats",
      ],
      [
        empEd2,
        "All mentors",
        "This is the page dedicated for all the mentors where we as an student can explore all the tutors who are registered to our platform. This page will include the details of the tutor, Quailification of the tutors, fees for the tutors and also includes connect buttos through which any one can connect to the tutor ",
      ],
      [
        empEd3,
        "Class room with whiteboard",
        "Here the main page of our porject where the teacher can actually teach the students. This page will hold the white board (actually black board 😉) where they can write and explain things, video conferencing, all connected students, and many more",
      ],
      [
        empEd4,
        "Authentication page",
        "This is out authentication section which include registration, log in both for the students and the teachers. This page will make sure that the user that may be student or a teacher is registering himself with correct data, strong password, must be providing his profile picture, and other required data.",
      ],
    ],
  },
  {
    id: 2,
    name: "YouTube Clone",
    bio: "A complete clone of YouTube UI to Backend with integration of own database",
    date: "Running",
    img: [
      [
        pixelPlex1,
        "Feed Page",
        "This is home/Feed page of my Youtube clone which will display all the videos that are uploaded on my platform. This is containing a section of catagories where some catagories are mentioned, a search bar for searching any video, and all the videos which can be played",
      ],
      [
        pixelPlex2,
        "Channel page of any perticular channel",
        "A dedicated page for the channel where all the videos uploaded through that channel, displaying all the subscriber along with no. of videos uploaded through that channel ",
      ],
      [
        pixelPlex3,
        "Search page",
        "This is the search page where the search results will be displayed. The search will include the channels and videos",
      ],
      [
        pixelPlex4,
        "Video Streaming page",
        " Here all the video will be played. This page will include the video details like Title, Description, Channel name, date, view and likes along with the list of recommandation videos",
      ],
    ],
    description: "",
  },
  // {
  //   id: 3,
  //   name: "Woodzzz Craft",
  //   bio: "A commercial website for displaying the woods craft of their shop",
  //   date: "Running",
  //   img: [[]],
  // },
  {
    id: 4,
    name: "Blog Web Site",
    bio: "Created a Blog website where the user can read and upload the blogs",
    date: "March 2024",
    img: [
      [
        blog,
        "Home page of the blog website",
        " This is the home page of my blog website where all the blog which was uploaded will be explored here ",
      ],
    ],
  },
  {
    id: 5,
    name: "Shoes Mall",
    bio: "An online e-commerce website for shoes, Sandals and other footwears ",
    date: "Jan 2024",
    img: [
      [
        shoeMall1,
        "Feed Page for the shoe mall",
        "Home page of my shoe mall, here all the trending and most demanded shoes will be displayed. It will show all the latest shoes which are trending in the market.",
      ],
      [
        shoeMall2,
        "Feed Page for the shoe mall",
        "Home page of my shoe mall, here all the trending and most demanded shoes will be displayed. It will show all the latest shoes which are trending in the market.",
      ],
      [
        shoeMall3,
        "Product detail page",
        "A dedicated page for product details which in this case is shoes details. Here, the price of the shoe, description of the shoe and other details are available. It will also recommend the similar products",
      ],
      [
        shoeMall4,
        "Cart page",
        "Cart page which will hold all the products and it's datails like it's price here. Here you can also add your address details and payment details.",
      ],
    ],
  },
  {
    id: 6,
    name: "Swiggi Clone",
    bio: "Cloned the UI of swiggi, a food delivery website for practice purpose",
    date: "Sep 2023",
    img: [
      [
        Swiggi1,
        "All restaurent page",
        "This is the home page of my online food delivery web app which is clone of Swiggi where you can explore all the restaurents registered on our platform. Here you can also search the restaurents and also explore the list of menu a particular restaurent is offering.",
      ],
      [
        Swiggi2,
        "All dishes of a perticular restaurent",
        "And here is all the list of dishes the selected restaurent is offering. You see the dish, compare the food price, and also add to the cart",
      ],
      [
        Swiggi3,
        "Your cart page",
        "Cart page, where all the list of items will be displayed which you have added to the cart and also will give you the total price. It will also display the account details of the user, address where it is going to be delivered and payment methods",
      ],
    ],
    description: "",
  },
];
