import CategoryCard from "./CategoryCard";

const Categories = () => {
  return (
    <section className={`grid grid-cols-1 lg:grid-cols-3 gap-5`}>
      {[1, 2, 3].map((item) => {
        return <CategoryCard key={item} />;
      })}
    </section>
  );
};

export default Categories;
