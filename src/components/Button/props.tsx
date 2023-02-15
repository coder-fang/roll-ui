
// 定义按钮大小类型
export type ButtonSize = 'lg' | 'sm';
// 定义按钮type种类
export type ButtonType = 'primary' | 'default' ｜ 'danger' | 'link';
// 定义Button 组件基础入参属性
interface BaseButtonProps {
    className: string,
    disabled: boolean,
    size: ButtonType,
    btnType: ButtonType,
    children: React.ReactNode,
    href: string
}
// 定义按钮的基础类型与原生按钮的联合类型
type NativeButtonProps = BaseButtonProps & React.ButtonHTMLAttributes<HTMLElement>;
// 定义按钮的基础类型与原生A标签的联合类型
type AnchorButtonProps = BaseButtonProps & React.AnchorHTMLAttributes<HTMLElement>;
// 执行Partial，相当于所有属性都变为可选，如：{disabled?:boolean,...}
export type ButtonProps = Partial<NativeButtonProps & AnchorButtonProps>
