import { Searchbar } from "./Searchbar";

const ytLogo =
  "https://1000logos.net/wp-content/uploads/2017/05/Color-YouTube-logo.jpg";
export const Appbar = () => {
  return (
    <div className="flex justify-between">
      <div className="hidden sm:block sm:pl-2">
      <img src={ytLogo} alt="YouTube Logo" className="h-16 w-auto" />
      </div>
      <div className="pt-2 pr-10">
        <Searchbar />
      </div>
      <div>Sign in</div>
    </div>
  );
};
