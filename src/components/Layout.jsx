export default function Layout({ children }) {
  return (
    <main className="layout">
      <h1 className="title">
        <span className="title-emoji">🐱</span> 고양이 댄스 파티{' '}
        <span className="title-emoji">🎶</span>
      </h1>
      <p className="subtitle">클릭해서 고양이와 함께 춤을!</p>
      {children}
    </main>
  );
}
