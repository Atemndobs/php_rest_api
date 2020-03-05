<?php


namespace App\Controller;


use App\Entity\LostPassword;
use App\Entity\User;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Security\Core\Encoder\UserPasswordEncoderInterface;

class ResetPasswordController extends AbstractController
{


    public function __invoke(Request $request, User $user, UserPasswordEncoderInterface $encoder)
    {
        // TODO: Implement __invoke() method.

        if ($request->get('token') === $user->getLostPassword()->getToken())
        {
            $entityManager = $this->getDoctrine()->getManager();
            $user->setPassword($encoder->encodePassword($user, $request->get('password')));
            $repository = $this->getDoctrine()->getRepository(LostPassword::class);
            $item = $repository->find($user->getLostPassword()->getId());
            $entityManager->remove($item);
            $entityManager->persist($user);
            $entityManager->flush();

            return new Response(sprintf('User password %s successfully updated', $user->getUsername()));

        }
        return new Response(sprintf('Invalid data'));

    }



}
