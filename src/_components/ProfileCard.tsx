import Image from "next/image";

const ProfileCard = () => {
  return (
    <div className="relative flex p-6 bg-white rounded-lg shadow-lg">
      <div className="absolute top-4 right-10+">
        <Image
          src="/images/microsoft.svg" 
          alt="Logo"
          width={100} 
          height={100}
        />
      </div>
      <div className="flex-shrink-0">
        <Image
          src="/images/dm.jpg" 
          alt="Profile Picture"
          width={300}
          height={300}
          className="rounded-full"
        />
      </div>
      <div className="ml-4">
        <h1 className="text-xl font-semibold">Alexandra Zatarain</h1>
        <p className="text-gray-500">VP of Branding - Eight Sleep</p>
        <p className="text-gray-500">Consumer Product Expert</p>
        <p className="mt-2 text-gray-700">
          Alexandra Zatarain is the Co-Founder and Vice President of Brand and
          Marketing at Eight Sleep, the world&apos;s first sleep fitness company.
          Eight Sleep solves sleep&apos;s most pressing issues through innovation and
          cutting-edge technology. The Pod, its best-selling product, has a
          cult-like following among business...
        </p>
        <div className="mt-3">
          <span className="text-gray-400">• Raised $160m+</span>
          <span className="text-gray-400 mx-2">• Forbes 30 Under 30</span>
          <span className="text-gray-400 mx-2">• CrossFit</span>
          <span className="text-gray-400 mx-2">• Formula 1</span>
          <span className="text-gray-400 mx-2">• Inc. Top 100</span>
        </div>
        <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-full">
          View Profile
        </button>
      </div>
    </div>
  );
};

export default ProfileCard;
