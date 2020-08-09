<template>
    <div class="container">
        <div class="iconBox" v-for="icon in icons">
            <Icon :name="icon"></Icon>
            <span class="name">{{icon}}</span>
            <Button type="text" @click="copyText(icon)">复制</Button>
        </div>

    </div>

</template>

<script>
    const iconsString = `customer-service
        delete
        direction-down
        copy
        cut
        data-view
        direction-down-circle
        direction-right
        direction-up
        discount
        direction-left
        download
        electronics
        drag
        elipsis
        export
        explain
        edit
        eye-close
        email
        error
        favorite
        file-common
        file-delete
        file-add
        film
        fabulous
        file
        folder-close
        filter
        good
        hide
        home
        history
        file-open
        forward
        image-text
        keyboard-26
        keyboard-9
        link
        layout
        fullscreen-shrink
        layers
        lock
        fullscreen-expand
        map
        meh
        menu
        loading
        help
        minus-circle
        modular
        notification
        mic
        more
        pad
        operation
        play
        print
        mobile-phone
        minus
        navigation
        pdf
        move
        refresh
        run-up
        picture
        run-in
        pin
        save
        search
        share
        scanning
        security
        sign-out
        select
        stop
        success
       smile
        switch
        setting
        survey
        task
        skip
        text
        time
        telephone-out
        toggle-left
        toggle-right
        telephone
        top
        unlock
        user
        upload
        work
        training
        warning
        zoom-in
        zoom-out
        add-bold
        arrow-left-bold
        arrow-up-bold
        close-bold
        arrow-down-bold
        minus-bold
        arrow-right-bold
        select-bold
        column-4
        add
        add-circle
        adjust
        arrow-up-circle
        arrow-right-circle
        arrow-down
        ashbin
        arrow-right
        browse
        bottom
        bad
        arrow-left-circle
        arrow-double-right
        caps-lock
        camera
        chart-bar
        attachment
        code
        close
        check-item
        calendar
        comment
        column-vertical
        column-horizontal
        complete
        chart-pie
        cry
        close
        search`
    import Icon from "../../../src/Icon";
    import templateDemos from './template-demos'
    import Button from "../../../src/Button";
    import Toast from "../../../src/Toast.js";
    import Vue from 'vue'
    Vue.use(Toast)
    export default {
        name: 'icon-demos',
        components: {
            Icon,
            templateDemos,
            Button
        },
        data() {
            return {
                icons: iconsString.split('\n').map((v) => v.trim())
            }
        },
        methods: {
            copyText(text) {
                let input = document.createElement("input");
                input.style.opacity='0'
                document.body.append(input)
                input.value = `<Icon name="${text}"></Icon>`; // 修改文本框的内容
                input.select(); // 选中文本
                document.execCommand("copy"); // 执行浏览器复制命令
                input.remove()
                this.$toast(`成功复制${text}的Icon标签`)
            }
        }
    }
</script>

<style lang="scss" scoped>
    .container {
        display: flex;
        flex-wrap: wrap;

        .iconBox {
            width: 120px;
            height: 120px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;

            .name {
                font-size: 14px;
                white-space: nowrap;
                text-overflow: ellipsis;
                overflow: hidden;
            }

            .icon {
                font-size: 40px;
                padding: 10px;
                border-radius: 4px;

                &:hover {
                    background-color: rgba(0, 0, 0, 0.1);
                }
            }
        }


    }


</style>
