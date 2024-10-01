import styls from "./index.module.css";

type Props = {
  children: React.ReactNode;
};

export default function Sheet({ children }: Props) {
  return <div className={styls.container}>{children}</div>;
}
