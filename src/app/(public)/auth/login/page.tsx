import React from 'react'

const page = () => {
    return (
        <main className="flex flex-col md:flex-row-reverse md:h-screen bg-gradient-to-b dark:from-emerald-950 dark:to-slate-950">
            <section className="flex items-start w-full px-4 mx-auto md:px-0 md:items-center md:w-1/3">
                <div className="flex flex-row items-center w-full max-w-sm py-4 mx-auto md:mx-0 my-auto min-w-min relative md:-left-2.5 pt-4 md:py-4 transform origin-left bg-primary text-primary">
                    <div className="logo-animated flex items-center space-x-1">
                    </div>
                </div>
            </section>
            <section className="justify-center px-4 md:px-0 md:flex md:w-2/3 md:border-r">
                <div className="w-full max-w-sm py-4 mx-auto my-auto min-w-min md:py-9 md:w-7/12">
                    <h2 className="text-xl font-semibold md:text-2xl">Entra</h2>
                    <p className="text-xs md:text-sm text-slate-400">¿Nuevo en el programa? {' '}
                        <a className="text-green-600 text-xs md:text-sm font-semibold" href="/auth/register">Registrate para crear una cuenta.</a>
                    </p>
                    <div className="my-4">
                        <form className="new_user" id="new_user" action="/register" accept-charset="UTF-8" method="post">
                            <input type="hidden" name="authenticity_token" value="W2UJYFiq_3As3omwiyfdMIYlpgTavuR8vcsjIFUhbAVcxRm9egyIbaOvUm75Vz2VXzD8ClWfkmxxsEwy7tYvmQ" autoComplete="off" />
                            <div className="mb-3 flex flex-col gap-2">
                                <label htmlFor="user_email" className='text-sm text-slate-400'>Correo electronico</label>
                                <input className='py-2 px-3 rounded-md w-full bg-emerald-950' autoFocus={true} autoComplete="email" required={true} type="email" name="user[email]" id="user_email" />
                            </div>
                            <div className="mb-3 flex flex-col gap-2">
                                <label htmlFor="user_password" className='text-sm text-slate-400'>Contrasena</label>
                                <input autoComplete="current-password" className='py-2 px-3 rounded-md w-full bg-emerald-950 ring-1 ring-emerald-700' required={true} type="password" name="user[password]" id="user_password" />
                            </div>
                            <div className="flex justify-between mb-4">
                                <a className="text-xs text-slate-400 hover:text-green-600" href="/password/new">¿Olvidaste tu contrasena?</a>
                            </div>
                            <button name="button" type="submit" className="bg-green-700 hover:bg-green-600 py-2 px-4 w-full rounded-md">Entra</button>
                        </form>
                    </div>
                    <div className="inline-flex items-center justify-around w-full ">
                        <hr className="w-40 h-px my-8 bg-gray-200 border-0 dark:bg-emerald-700"/>
                        <span className="absolute px-3 font-medium text-gray-900  dark:text-white ">o</span>
                        <hr className="w-40 h-px my-8 bg-gray-200 border-0 dark:bg-emerald-700"/>

                    </div>
                    <div className="flex">
                        <form className="mb-4 w-full" action="/auth/github" accept-charset="UTF-8" method="post">
                            <input type="hidden" name="authenticity_token" value="z8GHZkhNn_387JbUiiSgXktaglFCk63hEQOrJfSHJR8uRJOJwHg346RwBlhmCQdtC4wQeVTIEosytk63FaG0Lg" autoComplete="off" />
                            <button
                                className="bg-green-700 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-md w-full flex justify-around"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" aria-label="Gmail" role="img" viewBox="0 0 512 512" width={30}><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><rect width="512" height="512" rx="15%" fill="transparent"></rect><path d="M158 391v-142l-82-63V361q0 30 30 30" fill="#4285f4"></path><path d="M 154 248l102 77l102-77v-98l-102 77l-102-77" fill="#ea4335"></path><path d="M354 391v-142l82-63V361q0 30-30 30" fill="#34a853"></path><path d="M76 188l82 63v-98l-30-23c-27-21-52 0-52 26" fill="#c5221f"></path><path d="M436 188l-82 63v-98l30-23c27-21 52 0 52 26" fill="#fbbc04"></path></g></svg>
                                Entra con google
                            </button>
                        </form>
                    </div>
                </div>
            </section>
        </main >
    )
}

export default page

// {
//     -webkit-text-size-adjust: 100%;
//     tab-size: 4;
//     --white: #fff;
//     --black: #000;
//     --gray-050: #fafafa;
//     --gray-100: #ebebeb;
//     --gray-200: #e1e1e1;
//     --gray-300: #c1c1c1;
//     --gray-400: #a1a1a1;
//     --gray-500: #818181;
//     --gray-600: #616161;
//     --gray-700: #414141;
//     --gray-800: #2b2b2b;
//     --gray-850: #1a1a1a;
//     --gray-900: #111;
//     --red-050: snow;
//     --red-100: #ffe5e9;
//     --red-200: #fbbfc7;
//     --red-300: #ff909f;
//     --red-400: #ff7082;
//     --red-500: #ff455d;
//     --red-600: #dd243c;
//     --red-700: #c11027;
//     --red-800: #8f0718;
//     --red-900: #51050e;
//     --orange-050: #fff8f3;
//     --orange-100: #ffe8d8;
//     --orange-200: #ffc59b;
//     --orange-300: #fc9c66;
//     --orange-400: #fd812d;
//     --orange-500: #f35815;
//     --orange-600: #c43c02;
//     --orange-700: #962d00;
//     --orange-800: #672002;
//     --orange-900: #391303;
//     --yellow-050: #fffbe4;
//     --yellow-100: #fff1a8;
//     --yellow-200: #fed54a;
//     --yellow-300: #f2b600;
//     --yellow-400: #d19f03;
//     --yellow-500: #a78103;
//     --yellow-600: #835c01;
//     --yellow-700: #5c4716;
//     --yellow-800: #41320c;
//     --yellow-900: #261c02;
//     --green-050: #effff3;
//     --green-100: #d7fbdf;
//     --green-200: #a9ecb8;
//     --green-300: #75db8c;
//     --green-400: #40d763;
//     --green-500: #27b648;
//     --green-600: #13862e;
//     --green-700: #19652a;
//     --green-800: #10481d;
//     --green-900: #0a2912;
//     --blue-050: #f3fbff;
//     --blue-100: #ddf2ff;
//     --blue-200: #a9dffe;
//     --blue-300: #73c7f9;
//     --blue-400: #47b7f8;
//     --blue-500: #1e9de7;
//     --blue-600: #0e73cc;
//     --blue-700: #144eb6;
//     --blue-800: #0e3682;
//     --blue-900: #071f4d;
//     --purple-050: #f9f8ff;
//     --purple-100: #eeeaff;
//     --purple-200: #d4c9fe;
//     --purple-300: #b7a5fb;
//     --purple-400: #a18bf5;
//     --purple-500: #8467f3;
//     --purple-600: #624bbb;
//     --purple-700: #4b3990;
//     --purple-800: #3e1f75;
//     --purple-900: #261149;
//     --bg-primary: var(--gray-900);
//     --bg-secondary: var(--gray-800);
//     --bg-tertiary: var(--gray-700);
//     --border-primary: var(--gray-800);
//     --border-secondary: var(--gray-700);
//     --border-action: var(--gray-600);
//     --text-primary: var(--gray-050);
//     --text-secondary: var(--gray-400);
//     --text-blue: var(--blue-400);
//     --text-green: var(--green-500);
//     --text-orange: var(--orange-300);
//     --text-red: var(--red-500);
//     --text-red-disabled: var(--red-500);
//     --text-purple: var(--purple-400);
//     --graph-border: var(--gray-600);
//     --graph-blue-gradient-start: var(--blue-900);
//     --graph-blue-gradient-stop: var(--blue-900);
//     --graph-blue-light: var(--blue-700);
//     --graph-blue-dark: var(--blue-400);
//     --graph-orange-light: var(--orange-700);
//     --graph-orange-dark: var(--orange-400);
//     --graph-green-light: var(--green-700);
//     --graph-green-dark: var(--green-400);
//     -webkit-font-smoothing: antialiased;
//     border-style: solid;
//     box-sizing: border-box;
//     --tw-border-spacing-x: 0;
//     --tw-border-spacing-y: 0;
//     --tw-translate-x: 0;
//     --tw-translate-y: 0;
//     --tw-rotate: 0;
//     --tw-skew-x: 0;
//     --tw-skew-y: 0;
//     --tw-scale-x: 1;
//     --tw-scale-y: 1;
//     --tw-pan-x: ;
//     --tw-pan-y: ;
//     --tw-pinch-zoom: ;
//     --tw-scroll-snap-strictness: proximity;
//     --tw-ordinal: ;
//     --tw-slashed-zero: ;
//     --tw-numeric-figure: ;
//     --tw-numeric-spacing: ;
//     --tw-numeric-fraction: ;
//     --tw-ring-inset: ;
//     --tw-ring-offset-color: #fff;
//     --tw-ring-color: rgba(147,197,253,.5);
//     --tw-ring-offset-shadow: 0 0 #0000;
//     --tw-ring-shadow: 0 0 #0000;
//     --tw-blur: ;
//     --tw-brightness: ;
//     --tw-contrast: ;
//     --tw-grayscale: ;
//     --tw-hue-rotate: ;
//     --tw-invert: ;
//     --tw-saturate: ;
//     --tw-sepia: ;
//     --tw-drop-shadow: ;
//     --tw-backdrop-blur: ;
//     --tw-backdrop-brightness: ;
//     --tw-backdrop-contrast: ;
//     --tw-backdrop-grayscale: ;
//     --tw-backdrop-hue-rotate: ;
//     --tw-backdrop-invert: ;
//     --tw-backdrop-opacity: ;
//     --tw-backdrop-saturate: ;
//     --tw-backdrop-sepia: ;
//     color: inherit;
//     font-family: inherit;
//     font-weight: inherit;
//     margin: 0;
//     appearance: none;
//     line-height: 1.5rem;
//     background-color: var(--bg-secondary);
//     border-radius: 6px;
//     font-size: 14px;
//     padding: 4px 16px;
//     --tw-ring-offset-width: 0px;
//     --tw-shadow: 0 1px 2px 0 rgba(0,0,0,.05);
//     --tw-shadow-colored: 0 1px 2px 0 var(--tw-shadow-color);
//     border-color: var(--border-action);
//     border-width: 1px;
//     box-shadow: var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),var(--tw-shadow);
//     width: 100%;
// }