"use client"
import { GithubIcon, GoogleIcon, MicrosoftIcon } from '@/components/icons';
import { signInWithAzure } from '@/app/api/auth';
import { Button, Checkbox, Link } from "@nextui-org/react";
import {
    Modal,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalFooter
} from "@nextui-org/modal";

export default function LoginModal({ isOpen, onOpenChange }: { isOpen: boolean, onOpenChange: (isOpen: boolean) => void }) {

    return (
        <>
            <Modal
                isOpen={isOpen}
                onOpenChange={onOpenChange}
                placement="center"
                size="md"
            >
                <ModalContent className="py-8">
                    {(onClose) => (
                        <>
                            <ModalHeader className="text-2xl font-bold">Iniciar sesión</ModalHeader>
                            <ModalBody>
                                <p className="text-sm text-gray-600 mb-4">
                                    Inicia sesión para guardar tu progreso y acceder a tu trabajo en cualquier momento y lugar.
                                </p>

                                <Button
                                    startContent={<MicrosoftIcon className="text-blue-500" />}
                                    className="w-full justify-start bg-white text-black border-2 hover:bg-gray-100 transition-colors mb-2"
                                    onClick={signInWithAzure}
                                >
                                    Continue con Microsoft
                                </Button>

                                <Button
                                    startContent={<GoogleIcon className="text-red-500" />}
                                    className="w-full justify-start bg-white text-black border-2 hover:bg-gray-100 transition-colors mb-2"
                                    isDisabled
                                >
                                    Continue con Google
                                </Button>

                                <Button
                                    startContent={<GithubIcon className="text-gray-800" />}
                                    className="w-full justify-start bg-white text-black border-2 hover:bg-gray-100 transition-colors"
                                    isDisabled
                                >
                                    Continue con GitHub
                                </Button>
                            </ModalBody>
                            <ModalFooter className='flex justify-between'>
                                <Checkbox className="text-sm">Recordarme</Checkbox>
                                <Link href="#" color="primary" className="text-sm text-center">
                                    Aprende más
                                </Link>
                            </ModalFooter>
                        </>
                    )}
                </ModalContent>
            </Modal>


        </>
    );
}