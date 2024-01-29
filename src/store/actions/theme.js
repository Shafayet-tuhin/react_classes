export const changeBgColor = (bgColor) => {
    return {
        type: 'theme/changeBg',
        payload: bgColor
    }
}

export const changeTextColor = (color) => {
    return {
        type: 'theme/changeText',
        payload: color
    }
}

export const resetTheme = () => {
    return {
        type: 'theme/reset'
    }
}