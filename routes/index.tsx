import Counter from "../islands/Counter.tsx";
import { css, tw } from 'twind/css';

const cn = css({
  '&::before': {
    content: 'Hello'
  }
})

export default function Home() {
  return (
    <div class="p-4 mx-auto max-w-screen-md">
      <div className={tw(cn)}>Testing</div>
      <img
        src="/logo.svg"
        class="w-32 h-32"
        alt="the fresh logo: a sliced lemon dripping with juice"
      />
      <p class="my-6">
        Welcome to `fresh`. Try updating this message in the ./routes/index.tsx
        file, and refresh.
      </p>
      <Counter start={3} />
    </div>
  );
}
