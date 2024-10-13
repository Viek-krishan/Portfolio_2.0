import { useEffect } from "react";

function useLandscapeAlert() {
  useEffect(() => {
    // Function to check if the device is a tablet
    const isTablet = () => {
      const width = window.innerWidth;
      // Typical tablet screen width is between 768px and 1024px
      return width >= 768 && width <= 1024;
    };

    // Function to check if the orientation is landscape
    const isLandscape = () => {
      return window.innerWidth > window.innerHeight;
    };

    // Function to handle orientation change
    const handleOrientationChange = () => {
      if (isTablet() && !isLandscape()) {
        alert(
          "Please rotate your device to landscape mode for the best experience"
        );
      }
    };

    // Check on load
    handleOrientationChange();

    // Add event listener for screen orientation change
    window.addEventListener("resize", handleOrientationChange);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", handleOrientationChange);
    };
  }, []); // Empty dependency array to ensure it runs once on mount
}

export default useLandscapeAlert;
