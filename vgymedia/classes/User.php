<?php


class User extends DatabaseHandler  {
    private $id;
    private $username;
    private $password_hash;
    private $email;

    static public function RowToModel(row) {
        return new User($row["id"], $row["username"], $row["password_hash"], $row["email"])
    }

    public function __construct($id, $username, $password_hash, $email) {
        $this->id = $id;
        $this->username = $username;
        $this->password_hash = $password_hash
        $this->email = $email
    }




    static public function SelectUserByUsername(string $username) { // By user_name
        try {
            $dbh = new DatabaseHandler();
            $result = $dbh->Select("SELECT * FROM `user` WHERE username = ?", [$username]);
            if (isset($result[0])) {
                return self::RowToModel($result[0]);
            } else {
                return null;
            }
        } catch(Exception $e) {
            throw new Exception($e->getMessage());
        }
    }
}