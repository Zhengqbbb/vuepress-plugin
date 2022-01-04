export interface ClipboardOptions {
    /**
     * @description: Copy icon is only visible when hovering over code block or is always visible.
     * @description: 复制按钮是否设置为悬停时可见
     * @default: false
     */
    staticIcon: boolean;

    /**
     * @description: This option describes the vertical position of the copy button component as well as the `successText`
     * @description: 设置复制按钮和成功提示的垂直位置
     * @default: "bottom"
     */
    align: "top" | "bottom";

    /**
     * @description: This is the CSS selector to which the copy button component will be attached.
     * @description: 目标代码块的CSS选择器
     * @default: 'div[class*="language-"]'
     */
    selector: string;

    /**
     * @description: Page animation delay(ms). Affect the generation of buttons when rendering
     * @description: 页面动画的延迟毫秒, 这会影响到渲染时的按钮生成
     * @default: 400
     */
    delay: number;

    /**
     * @description: This sets the color of the copy button and can take any hex code.
     * @description: 复制按钮的颜色, 可以使用任意的十六进制颜色代码
     * @default: "var(--c-brand)"
     */
    color: string;

    /**
     * @description: Enables the background transition animation of the attached code block when a user presses the copy button.
     * @description: 点击复制按钮时是否启动过渡动画
     * @default: true
     */
    backgroundTransition: boolean;

    /**
     * @description: This sets the color of the text that displays when a user presses the copy button and can take any hex code.
     * @description: 过渡动画背景颜色, 可以使用任意的十六进制颜色代码
     * @default: "var(--code-bg-color)"
     */
    backgroundTransitionColor: string;

    /**
     * @description: This sets the text that displays when a user presses the copy button.
     * @description: 复制成功后的提示词
     * @default: "Copied!"
     */
    successText: string;

    /**
     * @description: This sets the color of the text that displays when a user presses the copy button and can take any hex code.
     * @description: 设置提示词的颜色, 可以使用任意的十六进制颜色代码
     * @default: "var(--c-brand-light)"
     */
    successTextColor: string;
}
