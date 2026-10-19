export default function Container({ as: Tag = 'div', className = '', children, ...rest }) {
  return (
    <Tag className={`container ${className}`} {...rest}>
      {children}
    </Tag>
  )
}
