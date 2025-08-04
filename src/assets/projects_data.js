import redis_img from "../assets/redis.png";
import campus_ai_img from "../assets/campus-ai.png";
import food_app_img from "../assets/food-ordering.jpg";

const projects_data = [
  {
    proj_id: 1,
    proj_name: "Redis Server Clone",
    proj_img: redis_img,
    proj_github_link: "",
    proj_demo_link: "",
    proj_desc: `Built a lightweight Redis-inspired in-memory key-value store
                  using Java, focused on performance and scalability. The system
                  uses a HashMap for fast data access and is backed by a
                  multithreaded socket-based server. With ExecutorService and
                  ThreadPoolExecutor, the server supports high concurrency and
                  processes thousands of client commands per second with minimal
                  resource contention. Ideal for educational purposes and
                  demonstrating core concepts in systems programming, concurrent
                  processing, and network communication.`,
    proj_tech: "Java",
  },
  {
    proj_id: 2,
    proj_name: "Campus AI Companion",
    proj_img: campus_ai_img,
    proj_github_link: "",
    proj_demo_link: "",
    proj_desc: `Developed Campus AI Companion, a full-stack mobile app
                  designed to support students with personalized academic
                  guidance. Built with React Native and Node.js, the app
                  integrates Firebase for secure authentication and real-time
                  updates. By leveraging OpenAI's API, it delivers AI-powered
                  recommendations for study schedules, course planning, and
                  career paths. The app features a responsive, cross-platform UI
                  and demonstrated a measurable increase in user engagement and
                  retention during pilot testing.`,
    proj_tech: "React Native, Firebase, OpenAI",
  },
  {
    proj_id: 3,
    proj_name: "Food Ordering System App",
    proj_img: food_app_img,
    proj_github_link: "",
    proj_demo_link: "",
    proj_desc: `Built a desktop-based Food Ordering System using Java, JavaFX,
                  and MySQL, structured around the MVC architecture to promote
                  modularity and scalability. The system enables users to browse
                  menus, customize orders, and process transactions. A
                  well-designed relational database ensures efficient data
                  handling and fast queries. Applied Agile practices such as
                  sprint planning and iteration cycles, which improved team
                  productivity and delivery speed.`,
    proj_tech: "Java, JavaFX and MySQL",
  },
];

export default projects_data;
