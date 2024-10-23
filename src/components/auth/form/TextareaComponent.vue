<script setup>
    import 'quill/dist/quill.snow.css' 
    import { QuillEditor } from '@vueup/vue-quill'
    import '@vueup/vue-quill/dist/vue-quill.snow.css'
    import { ref } from 'vue';

    defineProps(
        {
            options: Array, 
            placeholder: String,
            name: String,
            libel: String,
            border: String,
            bgColor: String,
            width: String,
            purple: Boolean,
            bottom: String
        }
    )

    const content = ref('') 

    const editorOptions = {
    theme: 'snow',
    modules: {
        toolbar: [
        [{ header: [1, 2, 3, false] }],
        ['bold', 'italic', 'underline'],
        [{ 'list': 'ordered' }, { 'list': 'bullet' }],
        [{ 'align': [] }]
        ]
    }
    }

</script>

<template>
        <div class="input">
            <label :for="name">{{libel}}</label>
            <div id="textarea">
                <quill-editor v-model="content" :options="editorOptions"></quill-editor>
            </div>
        </div>
</template>

<style>
    .input{
        display: flex;
        align-items: start;
        justify-content: center;
        gap: 10px;
        flex-direction: column;
    }
    /* select */
    .input .select{
        width: 100%;
        padding: 10px 20px;
        border: 1px solid red;
        border-radius: 6px;
        font-size: 1.02rem;
        background-color: var(--white);
        color: var(--grey)
    }
    select option{
        color: var(--grey);
    }
    .input .select:focus{
        border: 1px solid var(--red);   
        outline: 2px solid var(--red);
    }
    .purple{
        width: 100%;
        padding: 10px 20px;
        border-radius: 6px;
        font-size: 1.02rem;
        background-color: var(--white);
    }
    .purple:focus{
        border: 1px solid var(--purple);   
        outline: 2px solid var(--purple);
    }
    /* ql-container et ql-toolbar sont contenu dans le composant quill-edtor qui est un module externe ajouter avec la commande npm */
    #textarea .ql-toolbar, #textarea .ql-container{ 
        width: 100%;
        max-width: 520px;
    }
    .ql-editor {
        word-wrap: break-word;
        white-space: normal;
        overflow-wrap: break-word;
    }
    .ql-container {
        width: 100%;
        height: 150px;
    }
    .ql-toolbar.ql-snow{
        border: none !important;
        border-radius: 10px 10px 0 0;
    }
    .ql-container.ql-snow{
        border: none !important;
        border-radius: 0 0 10px 10px;
    }
    #textarea{
        border: 1px solid var(--grey);
        box-sizing: border-box  ;
        width: 100%;
        max-width: 520px;
        min-height: 100px;
        border-radius: 10px;
    }
    #textarea:focus-within{
        border: 2px solid var(--red);
    }
</style>