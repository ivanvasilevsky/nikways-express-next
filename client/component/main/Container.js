export default function Container({children, className}) {
  return (
    <section className={className}>
      <div className="container">
        <div className={`${className}__inner`}>
          {children}
        </div>
      </div>
    </section>
  )
}