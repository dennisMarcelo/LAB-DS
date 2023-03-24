import React, { SVGAttributes } from 'react';

// eslint-disable-next-line no-undef
interface LogoProps extends SVGAttributes<HTMLOrSVGElement> {}

function Logo(props: LogoProps) {
  return (
    <svg
      width={125}
      height={94}
      viewBox="0 0 125 94"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M124.248 47.01c0-6.976-10.308-13.587-26.111-17.687 3.647-13.653 2.026-24.514-5.116-27.992C91.375.515 89.451.13 87.348.13v4.787c1.165 0 2.102.193 2.887.558 3.445 1.674 4.939 8.05 3.774 16.25-.279 2.018-.734 4.143-1.292 6.31-4.963-1.03-10.383-1.824-16.082-2.339-3.419-3.971-6.964-7.578-10.535-10.733C74.356 8.458 82.106 4.895 87.374 4.895V.108c-6.965 0-16.082 4.207-25.3 11.505C52.853 4.358 43.736.193 36.772.193V4.98c5.242 0 13.017 3.542 21.273 10.003a107.306 107.306 0 00-10.459 10.712c-5.724.515-11.143 1.31-16.107 2.361a55.903 55.903 0 01-1.317-6.225c-1.19-8.2.279-14.575 3.697-16.271.76-.386 1.748-.558 2.913-.558V.215c-2.128 0-4.052.386-5.724 1.202-7.116 3.478-8.712 14.318-5.04 27.927C10.257 33.466 0 40.056 0 47.011c0 6.976 10.308 13.588 26.11 17.688-3.646 13.652-2.025 24.514 5.117 27.991 1.646.816 3.57 1.202 5.698 1.202 6.964 0 16.082-4.207 25.3-11.505 9.219 7.255 18.336 11.42 25.3 11.42 2.128 0 4.053-.387 5.724-1.203 7.117-3.477 8.712-14.317 5.04-27.927 15.702-4.1 25.959-10.711 25.959-17.666zM91.274 32.694c-.937 2.769-2.102 5.624-3.42 8.479a97.977 97.977 0 00-3.317-5.152c-1.165-1.717-2.406-3.392-3.647-5.023 3.597.45 7.066 1.009 10.384 1.696zm-11.6 22.861c-1.975 2.898-4 5.646-6.103 8.2-3.773.28-7.598.43-11.447.43-3.824 0-7.649-.15-11.397-.408a117.831 117.831 0 01-6.128-8.157 106.988 106.988 0 01-5.268-8.544 106.982 106.982 0 015.242-8.565c1.976-2.898 4.002-5.645 6.104-8.2 3.773-.279 7.597-.43 11.447-.43 3.824 0 7.648.151 11.396.409a117.831 117.831 0 016.13 8.157 106.988 106.988 0 015.267 8.543 114.86 114.86 0 01-5.242 8.565zm8.18-2.79a82.926 82.926 0 013.496 8.543 131.987 131.987 0 01-10.434 1.717c1.24-1.653 2.481-3.348 3.647-5.087a117.459 117.459 0 003.292-5.173zm-25.68 22.904a94.779 94.779 0 01-7.04-6.87c2.28.087 4.61.15 6.965.15 2.38 0 4.736-.042 7.04-.15a89.5 89.5 0 01-6.964 6.87zM43.333 63.024a132.74 132.74 0 01-10.383-1.696c.937-2.769 2.102-5.624 3.419-8.479a97.951 97.951 0 003.317 5.152 140.636 140.636 0 003.647 5.023zm18.716-44.67a94.779 94.779 0 017.04 6.869c-2.279-.086-4.609-.15-6.964-.15-2.38 0-4.736.042-7.04.15a89.5 89.5 0 016.964-6.87zM43.307 30.997c-1.241 1.653-2.482 3.349-3.647 5.088a116.663 116.663 0 00-3.292 5.151 82.95 82.95 0 01-3.495-8.543 142.95 142.95 0 0110.434-1.696zm-22.92 26.876C11.422 54.63 5.622 50.38 5.622 47.01s5.8-7.642 14.765-10.862c2.178-.794 4.559-1.503 7.015-2.168 1.444 4.207 3.343 8.586 5.699 13.073-2.33 4.465-4.204 8.822-5.623 13.008a86.28 86.28 0 01-7.09-2.19zm13.625 30.674c-3.444-1.674-4.938-8.05-3.773-16.25.278-2.017.734-4.142 1.291-6.31 4.964 1.03 10.384 1.824 16.082 2.34 3.42 3.97 6.965 7.577 10.536 10.732-8.256 6.505-16.006 10.068-21.274 10.068-1.14-.021-2.102-.215-2.862-.58zM94.085 72.19c1.19 8.2-.279 14.576-3.698 16.272-.76.386-1.747.558-2.912.558-5.242 0-13.017-3.542-21.274-10.004a107.306 107.306 0 0010.46-10.711c5.724-.515 11.143-1.31 16.107-2.361.582 2.168 1.038 4.25 1.317 6.246zm9.75-14.317c-2.178.794-4.558 1.502-7.015 2.168-1.444-4.208-3.343-8.587-5.698-13.073 2.33-4.465 4.204-8.823 5.622-13.009a90.17 90.17 0 017.117 2.19c8.965 3.241 14.764 7.492 14.764 10.862-.025 3.37-5.824 7.642-14.79 10.861z"
        fill="#81D8F7"
      />
      <path
        d="M62.099 56.82c6.392 0 11.573-4.391 11.573-9.81 0-5.417-5.181-9.81-11.573-9.81s-11.574 4.393-11.574 9.81c0 5.419 5.181 9.81 11.574 9.81z"
        fill="#81D8F7"
      />
    </svg>
  );
}

export default Logo;
