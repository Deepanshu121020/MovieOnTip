import { useEffect, useState } from 'react';

// Import icons from react-icons
import { MdMovie } from 'react-icons/md';
import { FaBars, FaUserCircle } from 'react-icons/fa';

// Firebase imports
import { auth, db } from '../../firebase';
import { doc, getDoc } from 'firebase/firestore';

// Import the CustomModal component
import CustomModal from './CustomModal';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [userDetails, setUserDetails] = useState(null);
  const [showUserDetails, setShowUserDetails] = useState(false);

  // Fetch user data from Firestore
  const fetchUserData = async () => {
    auth.onAuthStateChanged(async (user) => {
      if (user) {
        const docRef = doc(db, 'Users', user.uid);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          setUserDetails(docSnap.data());
        } else {
          console.log('User document not found');
        }
      } else {
        console.log('User not logged in');
      }
    });
  };

  useEffect(() => {
    fetchUserData();
  }, []);

  // Toggle user details display
  const toggleUserDetails = () => {
    setShowUserDetails(!showUserDetails);
  };

  // Handle user logout
  async function handleLogout() {
    try {
      await auth.signOut();
      window.location.href = '/';
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <header className="bg-gray-900 text-white">
      <nav
        aria-label="Global"
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
      >
        <div className="flex lg:flex-1">
          <a href="#" className="-m-1.5 p-1.5">
            <span className="sr-only">MovieOnTip</span>
            <div className="icon flex-row flex justify-center items-center gap-3">
              <MdMovie className="h-7 w-7" />
              <span className="h-8 font-semibold text-xl w-auto ">MovieOnTip </span>
            </div>
          </a>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          >
            <span className="sr-only">Open main menu</span>
            <FaBars aria-hidden="true" className="h-6 w-6" />
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          <a href="#" className="text-sm font-semibold leading-6 ">
            Home
          </a>
          <a href="#" className="text-sm font-semibold leading-6 ">
            Movie Categories
          </a>
          <a href="#" className="text-sm font-semibold leading-6 ">
            Movie Details
          </a>
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end gap-3">
          <div className="relative">
            <FaUserCircle
              className="h-6 w-6 cursor-pointer"
              onClick={toggleUserDetails}
            />
            {showUserDetails && (
              <div className="bg-gray-900 mt-5 w-[200px] h-[100px] absolute top-full right-0 rounded-lg p-3">
                {userDetails ? (
                  <div>
                    <p className="text-white text-lg text-center">
                      {userDetails.username}
                    </p>
                    <p className="text-white text-lg text-center">
                      {userDetails.email}
                    </p>
                  </div>
                ) : (
                  <p className="text-white text-lg text-center">
                    No user logged in
                  </p>
                )}
              </div>
            )}
          </div>
          <a
            href="#"
            className="text-sm font-semibold leading-6 ml-3"
            onClick={handleLogout}
          >
            Log Out <span aria-hidden="true">&rarr;</span>
          </a>
        </div>
      </nav>

      {/* Use CustomModal for the mobile menu */}
      <CustomModal isOpen={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)}>
        <div className="flex flex-col items-center mt-4 space-y-6">
          <a
            href="#"
            className="text-base font-semibold leading-7 text-black hover:text-gray-300 dark:text-white"
          >
            Home
          </a>
          <a
            href="#"
            className="text-base font-semibold leading-7 text-black hover:text-gray-300 dark:text-white"
          >
            Movie Categories
          </a>
          <a
            href="#"
            className="text-base font-semibold leading-7 text-black hover:text-gray-300 dark:text-white"
          >
            Movie Details
          </a>
          <button
            onClick={handleLogout}
            className="text-base font-semibold leading-7 text-black hover:text-gray-300 dark:text-white"
          >
            Log Out
          </button>
        </div>
      </CustomModal>
    </header>
  );
};

export default Navbar;
