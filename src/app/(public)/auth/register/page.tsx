import React from 'react'
import "./register.css";
import Image from 'next/image';

const page = () => {
    return (
        <main className="flex flex-col md:flex-row-reverse md:h-screen">
            <section className="flex items-start w-full px-4 mx-auto md:px-0 md:items-center md:w-1/3">
                <div className="flex flex-row items-center w-full max-w-sm py-4 mx-auto md:mx-0 my-auto min-w-min relative md:-left-2.5 pt-4 md:py-4 transform origin-left bg-primary text-primary">
                    <div className="logo-animated flex items-center space-x-1">
                    </div>
                    <Image
                        className="relative dark:drop-shadow-[0_0_1rem_#279902]"
                        src="/proexcelencia.png"
                        alt="Logo Proexcelencia"
                        width={250}
                        height={50}
                        priority
                    />
                </div>
            </section>

            <section className="justify-center px-4 md:px-0 md:flex md:w-2/3 md:border-r">
                <div className="w-full max-w-sm py-4 mx-auto my-auto min-w-min md:py-9 md:w-7/12">

                    <h2 className="text-xl font-semibold md:text-2xl">Registrate</h2>
                    <p className="text-secondary">Ya tienes una cuenta?
                        <a className="font-medium" href="/auth/login">Entra</a>.
                    </p>

                    <div className="my-4">
                        <form className="new_user" id="new_user" action="/sign-up" accept-charset="UTF-8" method="post"><input type="hidden" name="authenticity_token" value="igtv8lbcdGu0AVlQYu_0BNU3ZbxgUZ8lilwW7wr5gYT5c-nxV9pq5Pa4rx1wbHyflMSWqq3Yo-vNKNz0gCUvuA" autoComplete="off" />
                            <div className="mb-3">
                                <label htmlFor="user_email">Email</label>
                                <input autoFocus={true} autoComplete="email" required={true} type="email" value="" name="user[email]" id="user_email" />
                            </div>

                            <div className="mb-3">
                                {/*  <auto-check csrf="50j38ClGrnTOv2XT0XOsNXXdwWxMworsk-_3p7Gdr_guqqjiXTRoTz51-38xQCKjvTjqbSYXYqrG7-wtjMO2XQ" src="/users/password-strength" required=""> */}
                                <div className="flex items-center justify-between leading-none mb-1.5">
                                    <label className="mb-0" htmlFor="user_password">Contrasena</label>
                                    <div className="js-password-strength-container" aria-live="polite"></div>
                                </div>
                                <input className="js-password-strength" autoComplete="off" required={true} type="password" name="user[password]" id="user_password" spellCheck="false" />
                                {/* // </auto-check> */}
                            </div>

                            <div className="mb-4">
                                <label htmlFor="user_password_confirmation">Confirma la contrasena</label>
                                <input autoComplete="new-password" required={true} type="password" name="user[password_confirmation]" id="user_password_confirmation" />
                            </div>

                            <p className="mb-3 text-sm text-secondary">
                                By registering, you agree to the processing of your personal data by
                                PlanetScale as described in the <a href="https://planetscale.com/legal/privacy" target="_blank">Privacy Policy</a>.
                            </p>

                            <div className="flex items-center mb-4">
                                <input className="mr-1" type="checkbox" value="1" name="tos" id="tos" required={true} />
                                <label className="mb-0 font-normal" htmlFor="tos">Acepto los <a href="https://planetscale.com/legal/agreement" target="_blank">Terminos y condiciones del servicio</a></label>
                            </div>

                            <div className="flex justify-between">
                                <button name="button" type="submit" className="btn btn-primary w-full">Registrarse</button>
                            </div>
                        </form>
                    </div>
                    <div className="flex flex-col mb-3">
                        <hr className="h-0 border-t mt-sm" />
                        <div className="-mt-1 text-sm text-center">
                            <span className="px-2 bg-primary text-secondary">O</span>
                        </div>
                    </div>
                    <form action="/auth/github" accept-charset="UTF-8" method="post"><input type="hidden" name="authenticity_token" value="zpbU513RTgAhUFK19CAoYvisCzS-scaJ1m7mppY0jpcvE8AI1eTmHnnMwjkYDY9RuHqZHKjqeeP12wM0dxIfpg" autoComplete="off" />
                        <button type="submit" className="w-full btn btn-secondary">
                            <svg width="32" height="20px" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M16 0C7.16 0 0 7.16 0 16C0 23.08 4.58 29.06 10.94 31.18C11.74 31.32 12.04 30.84 12.04 30.42C12.04 30.04 12.02 28.78 12.02 27.44C8 28.18 6.96 26.46 6.64 25.56C6.46 25.1 5.68 23.68 5 23.3C4.44 23 3.64 22.26 4.98 22.24C6.24 22.22 7.14 23.4 7.44 23.88C8.88 26.3 11.18 25.62 12.1 25.2C12.24 24.16 12.66 23.46 13.12 23.06C9.56 22.66 5.84 21.28 5.84 15.16C5.84 13.42 6.46 11.98 7.48 10.86C7.32 10.46 6.76 8.82 7.64 6.62C7.64 6.62 8.98 6.2 12.04 8.26C13.32 7.9 14.68 7.72 16.04 7.72C17.4 7.72 18.76 7.9 20.04 8.26C23.1 6.18 24.44 6.62 24.44 6.62C25.32 8.82 24.76 10.46 24.6 10.86C25.62 11.98 26.24 13.4 26.24 15.16C26.24 21.3 22.5 22.66 18.94 23.06C19.52 23.56 20.02 24.52 20.02 26.02C20.02 28.16 20 29.88 20 30.42C20 30.84 20.3 31.34 21.1 31.18C24.2763 30.1077 27.0363 28.0664 28.9917 25.3432C30.947 22.6201 31.9991 19.3524 32 16C32 7.16 24.84 0 16 0Z" fill="currentColor"></path>
                            </svg>
                            Registrate con Gmail
                        </button>
                    </form>
                </div>
            </section>
        </main>
    )
}

export default page

