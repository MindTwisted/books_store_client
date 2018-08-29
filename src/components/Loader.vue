<template>
    <div class="pageLoader">
        <div class="lds-dual-ring"></div>
    </div>
</template>

<style scoped lang="scss">
    .pageLoader {
        position: absolute;
        z-index: 100;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: #fff;
    }

    .lds-dual-ring {
        width: 64px;
        height: 64px;
    }

    .lds-dual-ring:after {
        content: " ";
        display: block;
        width: 46px;
        height: 46px;
        margin: 1px;
        border-radius: 50%;
        border: 5px solid #000;
        border-color: #000 transparent #000 transparent;
        animation: lds-dual-ring 1.2s linear infinite;
    }

    @keyframes lds-dual-ring {
        0% {
            transform: rotate(0deg);
        }

        100% {
            transform: rotate(360deg);
        }
    }
</style>