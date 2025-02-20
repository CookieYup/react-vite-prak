// Основной контейнер с ограничением ширины
const Container: React.FC<React.PropsWithChildren<{}>> = ({ children }) => {
  return <div className="max-w-[1056px] mx-auto px-4">{children}</div>;
};


export default Container;