import utilStyles from "../styles/utils.module.css";

export default function MicroButton({ text, color,borderColor }) {
  return (
      <button
        style={{
          borderColor: borderColor,
          color: color,
        }}
        className={utilStyles.microbuttons}
      >
        {text}
      </button>
  );
}
