<?php

namespace App\Entity;

use ApiPlatform\Core\Annotation\ApiResource;
use Doctrine\ORM\Mapping as ORM;
use App\Controller\RequestNewPasswordController;

use Symfony\Component\Serializer\Annotation\Groups;

/**
 * @ApiResource(
 * normalizationContext={"groups"={"read"}},denormalizationContext={"groups"={"write"}},
 * collectionOperations={
 *     "post",
 *     "reset_password"={
 *         "method"="POST",
 *         "path"="/users/reset-password",
 *         "controller"=RequestNewPasswordController::class,
 *     }
 * }
 * )
 * @ORM\Entity(repositoryClass="App\Repository\LostPasswordRepository")
 */
class LostPassword
{
    /**
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $token;

    /**
     * @ORM\Column(type="string", length=255)
     * @Groups("write")
     */
    private $email;

    /**
     * @ORM\OneToOne(targetEntity="App\Entity\User", inversedBy="lostPassword", cascade={"persist", "remove"})
     * @ORM\JoinColumn(nullable=true)
     */
    private $user;

    public function __construct()
    {
        $this->token = sha1(random_bytes(12));
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getToken(): ?string
    {
        return $this->token;
    }

    public function setToken(string $token): self
    {
        $this->token = $token;

        return $this;
    }

    public function getEmail(): ?string
    {
        return $this->email;
    }

    public function setEmail(string $email): self
    {
        $this->email = $email;

        return $this;
    }

    public function getUser(): ?User
    {
        return $this->user;
    }

    public function setUser(?User $user): self
    {
        $this->user = $user;

        return $this;
    }
}
