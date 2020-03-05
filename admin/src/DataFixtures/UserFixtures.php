<?php

namespace App\DataFixtures;

use App\Entity\User;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Common\Persistence\ObjectManager;
use Symfony\Component\Security\Core\Encoder\UserPasswordEncoderInterface;

class UserFixtures extends Fixture
{

    /**
     * @var UserPasswordEncoderInterface
     */
    private $passwordEncoder;

    public function __construct(UserPasswordEncoderInterface $passwordEncoder)
    {
        $this->passwordEncoder = $passwordEncoder;
    }

    public function load(ObjectManager $manager)
    {
        foreach ($this->getUserData() as [$email, $password, $roles])
        {
            $user = new User();

            $user->setEmail($email)
                ->setPassword($this->passwordEncoder->encodePassword($user, $password));

            $user->setRoles($roles);
            $manager->persist($user);
        }
        $manager->flush();
    }

    private function getUserData(): array
    {
        return [
            [ 'admin@email.com', 'cnn',["ROLE_ADMIN"]],  // $argon2id$v=19$m=65536,t=4,p=1$hyZrJxqK+fqQ9ouNrZnuEQ$0fcU+3sQUJxpTK7u8mc2Dna7zIFpx9oeIz2hguZgXrc
            [ 'admin1@email.com', 'pass',['ROLE_ADMIN']],
            ['admin2@email.com', 'pass', ['ROLE_ADMIN']],
            ['user1@email.com', 'pass', ['ROLE_USER']],
            [ 'user2@email.com', 'pass', ['ROLE_USER']],

        ];
    }
}
