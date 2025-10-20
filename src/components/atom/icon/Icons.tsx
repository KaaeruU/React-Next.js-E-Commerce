import { IconDetailedProps } from "./icon-type";

export const EyeOn = (props: IconDetailedProps) => {
  const { weight, ...rest } = props;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      {...rest}
      viewBox="0 0 24 24"
    >
      {weight === "regular" && (
        <>
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M3.118 12.467a.987.987 0 0 1 0-.935C5.01 8.033 8.505 5 12 5s6.99 3.033 8.882 6.533a.987.987 0 0 1 0 .935C18.99 15.967 15.495 19 12 19s-6.99-3.033-8.882-6.533Z"
            clipRule="evenodd"
          />
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.429}
            d="M14.121 9.879A3 3 0 1 1 9.88 14.12 3 3 0 0 1 14.12 9.88"
          />
        </>
      )}
    </svg>
  );
};

export const Union = (props: IconDetailedProps) => {
  const { weight, ...rest } = props;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      viewBox="0 0 22 24"
      {...rest}
    >
      {weight === "regular" && (
        <>
          <path
            fill="currentColor"
            fillRule="evenodd"
            d="M7.428 5.846a4 4 0 0 1 8 0v.308h-8v-.308ZM6.498 8a1.348 1.348 0 0 0 .013 0h12.392c.162 0 .295.124.307.284l.607 7.892.332 4.321a1.539 1.539 0 0 1-1.534 1.657H4.24a1.539 1.539 0 0 1-1.534-1.656l.94-12.213A.307.307 0 0 1 3.951 8h2.546Zm-.917-1.846v-.308a5.846 5.846 0 0 1 11.693 0v.308h1.63c1.125 0 2.06.866 2.147 1.988l.939 12.213A3.385 3.385 0 0 1 18.615 24H4.24a3.385 3.385 0 0 1-3.375-3.643l.94-12.213a2.153 2.153 0 0 1 2.147-1.99h1.63Z"
            clipRule="evenodd"
          />
        </>
      )}
    </svg>
  );
};

export const Menu = (props: IconDetailedProps) => {
  const { weight, ...rest } = props;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      {...rest}
      viewBox="0 0 32 32"
    >
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M32 7H0V5h32v2ZM32 17H0v-2h32v2ZM32 27H0v-2h32v2Z"
        clipRule="evenodd"
      />
      {weight === "regular" && (
        <>
          <path
            fill="currentColor"
            fillRule="evenodd"
            d="M32 7H0V5h32v2ZM32 17H0v-2h32v2ZM32 27H0v-2h32v2Z"
            clipRule="evenodd"
          />
          <path
            fill="currentColor"
            fillRule="evenodd"
            d="M32 7H0V5h32v2ZM32 17H0v-2h32v2ZM32 27H0v-2h32v2Z"
            clipRule="evenodd"
          />
        </>
      )}
    </svg>
  );
};

export const Star = (props: IconDetailedProps) => {
  const { weight, ...rest } = props;

  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" {...rest}>
      {weight === "regular" && (
        <path
          fill="#FFE234"
          stroke="#000000"
          strokeWidth="0.5"
          strokeLinejoin="round"
          d="m8 .8 2.274 5.282L16 6.613l-4.32 3.795 1.264 5.61L8 13.082l-4.944 2.936 1.264-5.61L0 6.613l5.726-.53L8 .8Z"
        />
      )}
    </svg>
  );
};

export const Search = (props: IconDetailedProps) => {
  const { weight, ...rest } = props;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      {...rest}
    >
      {weight === "regular" && (
        <path
          stroke="#595959"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M15.714 6.838a6.276 6.276 0 1 1-8.876 8.876 6.276 6.276 0 0 1 8.876-8.876M19 19l-3.29-3.29"
        />
      )}
    </svg>
  );
};

export const Quit = (props: IconDetailedProps) => {
  const { weight, ...rest } = props;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      {...rest}
    >
      {weight === "regular" && (
        <>
          <path
            fill="currentColor"
            fillRule="evenodd"
            d="M8.416 7.174a.594.594 0 0 0-.84.84l3.786 3.785-4.187 4.188a.594.594 0 0 0 .839.84l4.188-4.188 4.187 4.187a.594.594 0 0 0 .84-.84L13.04 11.8l3.786-3.786a.594.594 0 0 0-.84-.84l-3.785 3.787-3.786-3.786Z"
            clipRule="evenodd"
          />
          <circle cx={12} cy={12} r={11.5} stroke="#191919" />
        </>
      )}
    </svg>
  );
};

export const Delete = (props: IconDetailedProps) => {
  const { weight, ...rest } = props;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      {...rest}
    >
      {weight === "regular" && (
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M18 6v12.75c0 1.243-1.027 2.25-2.269 2.25h-7.5A2.233 2.233 0 0 1 6 18.75V6M19.5 6h-15M10 3h4M14 10v7M10 17v-7"
        />
      )}
    </svg>
  );
};

export const Arrow = (props: IconDetailedProps) => {
  const { weight, ...rest } = props;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      viewBox="0 0 14 8"
      {...rest}
    >
      {weight === "bold" && (
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M.293.293a1 1 0 0 1 1.414 0L7 5.586 12.293.293a1 1 0 1 1 1.414 1.414l-6 6a1 1 0 0 1-1.414 0l-6-6a1 1 0 0 1 0-1.414Z"
          clipRule="evenodd"
        />
      )}
      {weight === "regular" && (
        <path
          fill="#currentColor"
          fillRule="evenodd"
          d="M.167.678a.547.547 0 0 1 .808 0L6 6.03 11.024.678a.547.547 0 0 1 .809 0 .637.637 0 0 1 0 .861L6.404 7.322a.547.547 0 0 1-.808 0L.167 1.539a.637.637 0 0 1 0-.86Z"
          clipRule="evenodd"
        />
      )}
    </svg>
  );
};

export const MenuQuit = (props: IconDetailedProps) => {
  const { weight, ...rest } = props;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      viewBox="0 0 32 32"
      {...rest}
    >
      {weight === "regular" && (
        <>
          <path
            fill="currentColor"
            fillRule="evenodd"
            d="M28.042 5.787 5.414 28.414 4 27 26.627 4.373l1.415 1.414Z"
            clipRule="evenodd"
          />
          <path
            fill="currentColor"
            fillRule="evenodd"
            d="M26.213 28.042 3.586 5.414 5 4l22.627 22.627-1.414 1.415Z"
            clipRule="evenodd"
          />
        </>
      )}
    </svg>
  );
};

export const Logo = (props: IconDetailedProps) => {
  const { weight, ...rest } = props;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      viewBox="0 0 67 36"
      {...rest}
    >
      {weight === "regular" && (
        <path
          fill="#currentColor"
          d="M0 35.073V.927h5.883v29.152h7.094v4.994H0ZM21.741 35.5c-5.466 0-8.137-3.287-8.137-9.902V10.402c0-6.615 2.67-9.902 8.137-9.902 5.466 0 8.137 3.287 8.137 9.902v15.196c0 6.615-2.67 9.902-8.137 9.902Zm-2.128-7.896c0 2.262.71 3.03 2.128 3.03 1.419 0 2.128-.768 2.128-3.03V8.482c0-2.305-.71-3.116-2.128-3.116-1.419 0-2.128.768-2.128 3.073v19.165ZM39.447 35.5c-4.465 0-7.302-3.287-7.302-9.561V10.402c0-6.615 2.67-9.902 8.137-9.902 5.466 0 8.137 3.287 8.137 9.902V14.5h-6.01V8.439c0-2.433-.75-3.116-2.127-3.116-1.377 0-2.128.683-2.128 3.116v19.165c0 2.262.626 3.073 2.128 3.073 1.627 0 2.128-.94 2.128-3.159v-5.463h-2.128v-4.61h8.137v17.628h-2.63l-.75-2.305c-1.336 1.708-3.088 2.732-5.592 2.732ZM58.863 35.5c-5.466 0-8.136-3.287-8.136-9.902V10.402c0-6.615 2.67-9.902 8.136-9.902C64.33.5 67 3.787 67 10.402v15.196c0 6.615-2.67 9.902-8.137 9.902Zm-2.128-7.896c0 2.262.71 3.03 2.128 3.03 1.419 0 2.128-.768 2.128-3.03V8.482c0-2.305-.709-3.116-2.128-3.116s-2.128.768-2.128 3.073v19.165Z"
        />
      )}
    </svg>
  );
};

export const LeftArrow = (props: IconDetailedProps) => {
  const { weight, ...rest } = props;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      viewBox="0 0 16 16"
      {...rest}
    >
      {weight === "regular" && (
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"
          clipRule="evenodd"
        />
      )}
      {weight === "bold" && (
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M15 8a.75.75 0 0 0-.75-.75H3.81l2.97-2.97a.75.75 0 1 0-1.06-1.06l-4.25 4.25a.75.75 0 0 0 0 1.06l4.25 4.25a.75.75 0 0 0 1.06-1.06L3.81 8.75h10.44A.75.75 0 0 0 15 8z"
          clipRule="evenodd"
        />
      )}
    </svg>
  );
};

export const RightArrow = (props: IconDetailedProps) => {
  const { weight, ...rest } = props;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      viewBox="0 0 16 16"
      {...rest}
    >
      {weight === "regular" && (
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
          clipRule="evenodd"
        />
      )}
      {weight === "bold" && (
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M1 8a.75.75 0 0 1 .75-.75h10.44l-2.97-2.97a.75.75 0 1 1 1.06-1.06l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 1 1-1.06-1.06l2.97-2.97H1.75A.75.75 0 0 1 1 8z"
          clipRule="evenodd"
        />
      )}
    </svg>
  );
};
export const Favorite = (props: IconDetailedProps) => {
  const { ...rest } = props;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 16 16"
      {...rest}
    >
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M4.893 2.352a2.547 2.547 0 0 0-2.54 2.553c0 1.477.857 3.012 2.02 4.43 1.021 1.246 2.222 2.335 3.127 3.143.905-.808 2.106-1.897 3.127-3.143 1.163-1.418 2.02-2.953 2.02-4.43a2.547 2.547 0 0 0-2.54-2.553c-.836 0-1.288.291-1.567.606-.261.295-.394.628-.515.932l-.063.156a.5.5 0 0 1-.924 0l-.063-.156c-.121-.304-.254-.637-.515-.932-.279-.315-.73-.606-1.567-.606Zm-3.54 2.553a3.547 3.547 0 0 1 3.54-3.553c1.115 0 1.842.408 2.316.943.112.126.208.259.291.39.083-.131.18-.264.291-.39.474-.535 1.2-.943 2.316-.943a3.547 3.547 0 0 1 3.54 3.553c0 1.835-1.046 3.6-2.246 5.064-1.137 1.387-2.48 2.582-3.395 3.397l-.173.155a.5.5 0 0 1-.666 0l-.173-.155c-.916-.815-2.258-2.01-3.395-3.397C2.4 8.505 1.352 6.74 1.352 4.905Z"
        clipRule="evenodd"
      />
    </svg>
  );
};

export const FilledFavorite = (props: IconDetailedProps) => {
  const { ...rest } = props;

  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" {...rest}>
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M1.352 4.905a3.547 3.547 0 0 1 3.541-3.553c1.365 0 1.968.571 2.607 1.583.64-1.012 1.242-1.583 2.607-1.583a3.547 3.547 0 0 1 3.54 3.553c0 1.835-1.046 3.6-2.246 5.064-1.137 1.387-2.48 2.582-3.395 3.397l-.173.155a.5.5 0 0 1-.666 0l-.173-.155c-.916-.815-2.258-2.01-3.395-3.397C2.4 8.505 1.352 6.74 1.352 4.905Z"
        clipRule="evenodd"
      />
    </svg>
  );
};
