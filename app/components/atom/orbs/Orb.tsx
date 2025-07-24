export const Background = () => {
  return (
    <div
      className="fixed -z-50 h-full min-h-screen w-full overflow-hidden bg-no-repeat
        md:bg-[url('/md-green-orb.svg'),url('/md-red-orb.svg'),url('/md-purple-orb.svg'),url('/md-orange-orb.svg')]
        md:bg-[position:bottom_left_,top_15rem_right,bottom_right,top_left]
        lg:bg-[url('/green-orb.svg'),url('/red-orb.svg'),url('/purple-orb.svg'),url('/orange-orb.svg')]
        lg:bg-[position:bottom_left_5rem,top_20rem_right,bottom_right,top_left]"
    ></div>
  );
};
