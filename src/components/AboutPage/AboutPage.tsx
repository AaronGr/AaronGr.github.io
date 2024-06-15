import profilePic from "../../assets/images/profile-pic.jpeg";

const AboutPage = () => {
  return (  
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="max-w-xl w-full p-8 bg-white rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold mb-4">Welcome to My Portfolio</h1>
        <div className="flex items-center">
          <img
            src={profilePic}
            alt="Profile Picture"
            className="w-24 h-24 rounded-full mr-4"
          />
          <div>
            <h2 className="text-xl font-semibold mb-2">About Me</h2>
            <p className="text-gray-700">
              I am a full-stack web developer with industry experience. Some
              languages, technologies, and frameworks I have worked with include
              React, Angular, Node.js, Python, Java, JavaScript, Spring, SQL,
              and AWS.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;